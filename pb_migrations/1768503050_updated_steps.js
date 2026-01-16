/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // update field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "select",
      "build",
      "speak",
      "note",
      "fill",
      "match",
      "category",
      "write",
      "flashcard",
      "check",
      "converse",
      "diag",
      "line",
      "dialogue"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // update field
  collection.fields.addAt(20, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "select",
      "build",
      "speak",
      "note",
      "fill",
      "match",
      "category",
      "write",
      "flashcard",
      "check",
      "converse",
      "diag",
      "line"
    ]
  }))

  return app.save(collection)
})
