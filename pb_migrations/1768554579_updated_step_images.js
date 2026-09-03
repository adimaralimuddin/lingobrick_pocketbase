/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1039159396")

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text758497015",
    "max": 0,
    "min": 0,
    "name": "folderId",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1579384326",
    "max": 0,
    "min": 0,
    "name": "name",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text190089999",
    "max": 0,
    "min": 0,
    "name": "path",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2363381545",
    "max": 0,
    "min": 0,
    "name": "type",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "json3622966325",
    "maxSize": 0,
    "name": "meta",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 2,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "lucas",
      "maria",
      "miguel",
      "paula"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1039159396")

  // remove field
  collection.fields.removeById("text758497015")

  // remove field
  collection.fields.removeById("text1579384326")

  // remove field
  collection.fields.removeById("text190089999")

  // remove field
  collection.fields.removeById("text2363381545")

  // remove field
  collection.fields.removeById("json3622966325")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 2,
    "name": "field",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "lucas",
      "maria",
      "miguel",
      "paula"
    ]
  }))

  return app.save(collection)
})
