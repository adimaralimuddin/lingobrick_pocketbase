/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2920376115")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "json3709769534",
    "maxSize": 0,
    "name": "scripts",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "regular",
      "lingoWorld",
      "checkpoint",
      "lingoTalk",
      "story"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2920376115")

  // remove field
  collection.fields.removeById("json3709769534")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 1,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "regular",
      "lingoWorld",
      "checkpoint",
      "lingoTalk"
    ]
  }))

  return app.save(collection)
})
