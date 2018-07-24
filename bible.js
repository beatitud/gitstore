{
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      value: {type: "string"},
      introductoryVersion: {type: "string"},
      endingVersion: {type: "string"}
    }
  },
  access: {
    get: "all",
    post: "all",
    "patch|put": function(owner, user) {
      return user.admin || user.id === owner.id;
    },
  },
  middleware: {
    get: function(owner) {
      owner.pets = this.collections.pets.get().filter(function(pet) {
        return pet.owners.indexOf(owner.id) !== -1;
      })
      delete owner.password;
      return owner;
    },
    'post|put': function(owner) {
      if (!owner.password) throw new Error("Password must be specified");
      owner.password = this.utils.hash(owner.password);
    }
  },
  sort: function(a1, a2) {
    var d1 = new Date(a1.date);
    var d2 = new Date(a2.date);
    return d1 > d2 ? -1
         : d1 < d2 ? 1
         : 0;
  }
}
