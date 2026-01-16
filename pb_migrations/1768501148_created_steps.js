/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number2155046657",
        "max": null,
        "min": null,
        "name": "index",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor1659857976",
        "maxSize": 0,
        "name": "prompt",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
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
          "match",
          "build",
          "check",
          "note",
          "flashcard",
          "fill",
          "dialogue",
          "converse",
          "write",
          "speak",
          "diag",
          "line",
          "category"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text724990059",
        "max": 0,
        "min": 0,
        "name": "title",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1503093023",
        "max": 0,
        "min": 0,
        "name": "title1",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1604228650",
        "max": 0,
        "min": 0,
        "name": "comments",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor2962681133",
        "maxSize": 0,
        "name": "roman",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor1881218749",
        "maxSize": 0,
        "name": "trans",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor3941433202",
        "maxSize": 0,
        "name": "tex",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4230737419",
        "max": 0,
        "min": 0,
        "name": "audurl",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1381834699",
        "max": 0,
        "min": 0,
        "name": "imgurl",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text2072370017",
        "max": 0,
        "min": 0,
        "name": "speaker",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "json3622966325",
        "maxSize": 0,
        "name": "meta",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1904025228",
        "maxSize": 0,
        "name": "words",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json3493198471",
        "maxSize": 0,
        "name": "options",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "json1154021400",
        "maxSize": 0,
        "name": "list",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor113136155",
        "maxSize": 0,
        "name": "exp",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text4116286108",
        "max": 0,
        "min": 0,
        "name": "subType",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "autodate2341372968",
        "name": "created_at",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate1130519967",
        "name": "updated_at",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_4284789913",
    "indexes": [],
    "listRule": null,
    "name": "steps",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913");

  return app.delete(collection);
})
