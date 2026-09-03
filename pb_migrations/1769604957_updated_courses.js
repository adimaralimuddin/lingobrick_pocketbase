/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_xHfvojOyGY` ON `courses` (\n  `name`,\n  `langCode`,\n  `level`\n)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "langCode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "ES",
      "JP",
      "FR",
      "ID",
      "HI"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_xHfvojOyGY` ON `courses` (\n  `name`,\n  `lang_code`,\n  `level`\n)"
    ]
  }, collection)

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "lang_code",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "ES",
      "JP",
      "FR",
      "ID",
      "HI"
    ]
  }))

  return app.save(collection)
})
