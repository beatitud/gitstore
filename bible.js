{
  id: "name",
  schema: {
    type: "object",
    properties: {
      name: {type: "string"},
      age: {type: "number"},
      type: {type: "string"},
      owners: {type: "array", items: {type: "string"}},
    }
    additionalProperties: false,
  },
  attachments: {
    photo: {
      extension: 'png',
      strategy: 'link',
    }
  },
  access: {
    get: "all",
    post: "all",
  },
}
