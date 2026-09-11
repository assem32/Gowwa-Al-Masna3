// Firestore REST API direct integration (no npm package needed!)

const PROJECT_ID = "industryconnect-cc800";
const API_KEY = "AIzaSyBUIGGMuLPPSRlntd4pmL_jPnQhXa5ehfo";

// Convert a JavaScript value into Firestore's REST API typed format
function formatFirestoreValue(val) {
  if (val === null || val === undefined) {
    return { nullValue: null };
  }
  if (typeof val === "boolean") {
    return { booleanValue: val };
  }
  if (typeof val === "number") {
    return Number.isInteger(val) ? { integerValue: val } : { doubleValue: val };
  }
  if (Array.isArray(val)) {
    return {
      arrayValue: {
        values: val.map(formatFirestoreValue)
      }
    };
  }
  if (typeof val === "object") {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = formatFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

// Convert Firestore REST document fields to clean JS object
function parseFirestoreDocument(doc) {
  if (!doc || !doc.fields) return {};
  const result = { id: doc.name ? doc.name.split('/').pop() : '' };

  for (const [key, valObj] of Object.entries(doc.fields)) {
    if ('stringValue' in valObj) result[key] = valObj.stringValue;
    else if ('integerValue' in valObj) result[key] = parseInt(valObj.integerValue, 10);
    else if ('doubleValue' in valObj) result[key] = parseFloat(valObj.doubleValue);
    else if ('booleanValue' in valObj) result[key] = valObj.booleanValue;
    else if ('nullValue' in valObj) result[key] = null;
    else if ('arrayValue' in valObj) {
      result[key] = (valObj.arrayValue.values || []).map((v) => {
        if ('stringValue' in v) return v.stringValue;
        if ('integerValue' in v) return parseInt(v.integerValue, 10);
        return v;
      });
    } else if ('mapValue' in valObj) {
      result[key] = parseFirestoreDocument({ fields: valObj.mapValue.fields });
    }
  }
  return result;
}

/**
 * Save form response directly to Firestore collection via REST API
 * @param {string} collectionName - e.g. "submissions"
 * @param {object} data - Plain JS object with form data
 */
export async function saveToFirestore(collectionName, data) {
  const fields = {};
  for (const [key, value] of Object.entries(data)) {
    fields[key] = formatFirestoreValue(value);
  }

  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}?key=${API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fields })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Firestore REST API error:", errorData);
    throw new Error(errorData.error?.message || "Failed to save submission");
  }

  return await response.json();
}

/**
 * Fetch documents from a Firestore collection via REST API
 * @param {string} collectionName - e.g. "submissions"
 */
export async function getFromFirestore(collectionName) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${collectionName}?key=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Firestore GET error:", errorData);
    throw new Error(errorData.error?.message || "Failed to fetch submissions");
  }

  const data = await response.json();
  if (!data.documents) return [];
  return data.documents.map(parseFirestoreDocument);
}
