// /// <reference path="../pb_data/types.d.ts" />

// function sanitizeFileName(name) {
//   name = String(name || '');

//   // drop any path parts
//   name = name.split('/').pop().split('\\').pop();

//   // remove control chars
//   name = name.replace(/[\x00-\x1F\x7F]/g, '');

//   // replace Windows-invalid chars
//   name = name.replace(/[:*?"<>|]/g, '_');

//   return name.trim();
// }

// function toArray(v) {
//   if (!v) return [];
//   return Array.isArray(v) ? v : [v];
// }

// function getSchemaFields(col) {
//   if (!col || !col.schema) return [];

//   var schema = col.schema;

//   // schema can differ by PB version/build
//   if (Array.isArray(schema)) return schema;

//   if (schema.fields) {
//     if (typeof schema.fields === 'function') return schema.fields();
//     if (Array.isArray(schema.fields)) return schema.fields;
//   }

//   return [];
// }

// function uniqueName(name, used) {
//   if (!used[name]) {
//     used[name] = true;
//     return name;
//   }

//   var dot = name.lastIndexOf('.');
//   var base = dot >= 0 ? name.slice(0, dot) : name;
//   var ext = dot >= 0 ? name.slice(dot) : '';

//   var n = 2;
//   while (used[base + ' (' + n + ')' + ext]) n++;

//   var candidate = base + ' (' + n + ')' + ext;
//   used[candidate] = true;
//   return candidate;
// }

// function renameUploadedFiles(e) {
//   try {
//     var record = e.record;

//     // In request hooks, e.collection should exist; fallback to record.collection()
//     var col = e.collection;
//     if (!col) {
//       col =
//         typeof record.collection === 'function'
//           ? record.collection()
//           : record.collection;
//     }

//     var fields = getSchemaFields(col);

//     if (typeof record.getUploadedFiles !== 'function') {
//       console.log(
//         '[file-rename] record.getUploadedFiles is not available in this PB version.'
//       );
//       return;
//     }

//     // Track names already present on the record to avoid collisions (esp. on update)
//     var used = {};
//     for (var i = 0; i < fields.length; i++) {
//       if (fields[i].type !== 'file') continue;

//       var existing = toArray(record.get(fields[i].name));
//       for (var j = 0; j < existing.length; j++) {
//         used[existing[j]] = true;
//       }
//     }

//     // Rename newly uploaded files
//     for (var i2 = 0; i2 < fields.length; i2++) {
//       var fdef = fields[i2];
//       if (fdef.type !== 'file') continue;

//       var uploaded = record.getUploadedFiles(fdef.name) || [];
//       for (var k = 0; k < uploaded.length; k++) {
//         var f = uploaded[k];
//         var orig = sanitizeFileName(f.originalName);

//         if (!orig) continue;

//         // IMPORTANT: avoid collisions (otherwise PB may fail the request)
//         var finalName = uniqueName(orig, used);

//         f.name = finalName;
//       }
//     }
//   } catch (err) {
//     // check PocketBase server logs for this
//     console.error('[file-rename] hook error:', err);
//   }
// }

// function handler(e) {
//   renameUploadedFiles(e);
//   return e.next();
// }

// onRecordCreateRequest(handler);
// onRecordUpdateRequest(handler);
