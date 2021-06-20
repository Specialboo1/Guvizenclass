var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
  ];
  obj.forEach((item) =>
  {
      Object.keys(item).forEach(key =>
      {
          console.log(key + ":" + item[key]);
      })
  }

  )
