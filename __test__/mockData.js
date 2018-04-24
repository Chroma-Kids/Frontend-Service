export const exampleData = {
  "classrooms" : {
    "-L8nQ8kBCYfZizh2cshQ" : {
      "created_at" : 1.52235492106E9,
      "description" : "Kids from 6 months to 1,5 years old",
      "name" : "Babies",
      "num_students" : 1,
      "num_teachers" : 1,
      "ratio" : "3",
      "students" : {
        "-L8mfM0RSKdKqwWB6qtz" : true
      },
      "teachers" : {
        "-L9odW4Nyww3rSa55rRU" : true
      },
      "updated_at" : 1.523389024151E9
    },
    "-L8qcB1PlvlViNVjRP28" : {
      "created_at" : 1.522408669756E9,
      "description" : "Kids from 3 to 4 years old",
      "name" : "Nursery",
      "num_students" : 4,
      "num_teachers" : 1,
      "ratio" : "8",
      "students" : {
        "-L8me9SLVbZM7OZHqlu7" : true,
        "-L8mfM0RSKdKqwWB6qtz" : true,
        "-L9bROFNpP4RgEP8YiAh" : true,
        "-LA9moXsXvSHf3iNDR8Q" : true
      },
      "teachers" : {
        "-L97VS13Yzw3K97234pQ" : true
      },
      "updated_at" : 1.522585054921E9
    },
    "-L9MdAxhmB7pXyXa7eQs" : {
      "created_at" : 1.522962579366E9,
      "description" : "Kids from 2 to 3 years old",
      "name" : "Pre-school",
      "num_students" : 1,
      "num_teachers" : 1,
      "ratio" : "8",
      "students" : {
        "-LA9moXsXvSHf3iNDR8Q" : true
      },
      "teachers" : {
        "-L97WToDjo1kejuZwLmc" : true
      }
    },
    "-L9bR7ld-_m2IRA5V-jb" : {
      "created_at" : 1.523227593879E9,
      "description" : "Kids from 2,5 to 4 years old",
      "name" : "Toddlers",
      "num_students" : 2,
      "num_teachers" : 1,
      "ratio" : "5",
      "students" : {
        "-L8mfM0RSKdKqwWB6qtz" : true,
        "-L9bROFNpP4RgEP8YiAh" : true
      },
      "teachers" : {
        "-L8n0Q1sU__32z1fgN71" : true
      }
    }
  },
  "shifts" : {
    "-LAK7AmsKKlWxVKGITFo" : {
      "created_at" : 1.523994115315E9,
      "shiftType" : "-LAK79oKPRAwHyP7PLYl",
      "teacher" : "-L8n0OdlHMityBf5jjdv",
      "timestamp" : "04062018"
    },
    "-LAK7F4cdTF7jVChFy8G" : {
      "created_at" : 1.523994132898E9,
      "shift" : "-LAK7AmsKKlWxVKGITFo",
      "shiftType" : "-LAK79oKPRAwHyP7PLYl",
      "teacher" : "-L8n0OdlHMityBf5jjdv",
      "timestamp" : "04092018"
    },
    "-LAK7FOjo99lQj3AMiRV" : {
      "created_at" : 1.523994134186E9,
      "shift" : "-LAK7F4cdTF7jVChFy8G",
      "shiftType" : "-LAK79oKPRAwHyP7PLYl",
      "teacher" : "-L8n0OdlHMityBf5jjdv",
      "timestamp" : "04102018"
    },
    "-LAK7FgNAV6nHabkQBcG" : {
      "created_at" : 1.523994135378E9,
      "shift" : "-LAK7FOjo99lQj3AMiRV",
      "shiftType" : "-LAK79oKPRAwHyP7PLYl",
      "teacher" : "-L8n0OdlHMityBf5jjdv",
      "timestamp" : "04112018"
    }
  },
  "shifttypes" : {
    "-LAK79oKPRAwHyP7PLYl" : {
      "created_at" : 1.523994111311E9,
      "label" : "Early",
      "name" : "From 8 to 5"
    },
    "-LAK8T8GJVOIReE87-Hy" : {
      "created_at" : 1.523994452617E9,
      "label" : "Middle",
      "name" : "From 8.30 to 17.30"
    },
    "-LAK8VPvIHJZG8eLPlOS" : {
      "created_at" : 1.52399446194E9,
      "label" : "Late",
      "name" : "From 9 to 18.00"
    }
  },
  "students" : {
    "-L8me9SLVbZM7OZHqlu7" : {
      "classrooms" : {
        "-L8qcB1PlvlViNVjRP28" : true
      },
      "created_at" : 1.522342078676E9,
      "name" : "Antonio",
      "surname" : "Machado",
      "updated_at" : 1.523389046409E9
    },
    "-L8mfM0RSKdKqwWB6qtz" : {
      "classrooms" : {
        "-L8nQ8kBCYfZizh2cshQ" : true,
        "-L8qcB1PlvlViNVjRP28" : true,
        "-L9bR7ld-_m2IRA5V-jb" : true
      },
      "created_at" : 1.522342391963E9,
      "name" : "Pedro",
      "surname" : "Pérez",
      "updated_at" : 1.522938965016E9
    },
    "-L9bROFNpP4RgEP8YiAh" : {
      "classrooms" : {
        "-L8qcB1PlvlViNVjRP28" : true,
        "-L9bR7ld-_m2IRA5V-jb" : true
      },
      "created_at" : 1.523227661384E9,
      "name" : "Maira",
      "surname" : "Kempes"
    },
    "-LA9moXsXvSHf3iNDR8Q" : {
      "classrooms" : {
        "-L8qcB1PlvlViNVjRP28" : true,
        "-L9MdAxhmB7pXyXa7eQs" : true
      },
      "created_at" : 1.523820742902E9,
      "name" : "Miguel",
      "surname" : "De Unamuno"
    }
  },
  "teachers" : {
    "-L8n0MHItGqhXmbHRRcP" : {
      "checked_in" : 1.523820487316E9,
      "checked_out" : 1.524068716103E9,
      "created_at" : 1.522348160379E9,
      "name" : "Alba",
      "shifts" : {
        "04092018" : {
          "created_at" : 1.523994478919E9,
          "shift" : "-LAK8ZZDUv-HEVOAYYXw",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0MHItGqhXmbHRRcP",
          "timestamp" : "04092018"
        },
        "04102018" : {
          "created_at" : 1.523994481398E9,
          "shift" : "-LAK8_9ylxneoN0K-tw1",
          "shiftType" : "-LAK8T8GJVOIReE87-Hy",
          "teacher" : "-L8n0MHItGqhXmbHRRcP",
          "timestamp" : "04102018"
        }
      },
      "surname" : "Arce",
      "updated_at" : 1.523532262808E9
    },
    "-L8n0OdlHMityBf5jjdv" : {
      "checked_in" : 1.523820525445E9,
      "checked_out" : 1.523820951591E9,
      "created_at" : 1.522348170074E9,
      "name" : "Inma",
      "shifts" : {
        "04062018" : {
          "created_at" : 1.523994115315E9,
          "shift" : "-LAK7AmsKKlWxVKGITFo",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04062018"
        },
        "04092018" : {
          "created_at" : 1.523994132898E9,
          "shift" : "-LAK7F4cdTF7jVChFy8G",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04092018"
        },
        "04102018" : {
          "created_at" : 1.523994134186E9,
          "shift" : "-LAK7FOjo99lQj3AMiRV",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04102018"
        },
        "04112018" : {
          "created_at" : 1.523994135378E9,
          "shift" : "-LAK7FgNAV6nHabkQBcG",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04112018"
        },
        "04122018" : {
          "created_at" : 1.523994136617E9,
          "shift" : "-LAK7FzjAiPS5b_NTuwt",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04122018"
        },
        "04132018" : {
          "created_at" : 1.523994137666E9,
          "shift" : "-LAK7GF7FcFjN53ff56D",
          "shiftType" : "-LAK79oKPRAwHyP7PLYl",
          "teacher" : "-L8n0OdlHMityBf5jjdv",
          "timestamp" : "04132018"
        }
      },
      "surname" : "Martinez",
      "updated_at" : 1.523532376892E9
    },
    "-L8n0Q1sU__32z1fgN71" : {
      "checked_in" : 1.523820580016E9,
      "classrooms" : {
        "-L9bR7ld-_m2IRA5V-jb" : true
      },
      "created_at" : 1.522348175777E9,
      "name" : "Marta",
      "shifts" : {
        "04062018" : {
          "created_at" : 1.523994466687E9,
          "shift" : "-LAK8W_5q--b70DNRM2N",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L8n0Q1sU__32z1fgN71",
          "timestamp" : "04062018"
        },
        "04092018" : {
          "created_at" : 1.523994468631E9,
          "shift" : "-LAK8X2TkeWeoQ4Id90V",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L8n0Q1sU__32z1fgN71",
          "timestamp" : "04092018"
        }
      },
      "surname" : "Pérez",
      "updated_at" : 1.523443678749E9
    },
    "-L9577wKyYOQl3Jm3zks" : {
      "checked_in" : 1.523892911239E9,
      "checked_out" : 1.523892911935E9,
      "created_at" : 1.522668703561E9,
      "name" : "Manuel",
      "shifts" : {
        "04102018" : {
          "created_at" : 1.523994473263E9,
          "shift" : "-LAK8YAqhvA20vxFxtbB",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L9577wKyYOQl3Jm3zks",
          "timestamp" : "04102018"
        }
      },
      "surname" : "Fernandez",
      "updated_at" : 1.523443683062E9
    },
    "-L97VS13Yzw3K97234pQ" : {
      "checked_in" : 1.523892933632E9,
      "classrooms" : {
        "-L8qcB1PlvlViNVjRP28" : true
      },
      "created_at" : 1.522708631739E9,
      "name" : "Kate",
      "shifts" : {
        "04112018" : {
          "created_at" : 1.523994470118E9,
          "shift" : "-LAK8XPibz4l1G0vI2OW",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L97VS13Yzw3K97234pQ",
          "timestamp" : "04112018"
        }
      },
      "surname" : "Winslow",
      "updated_at" : 1.523443686886E9
    },
    "-L97WToDjo1kejuZwLmc" : {
      "checked_in" : 1.523820581873E9,
      "classrooms" : {
        "-L9MdAxhmB7pXyXa7eQs" : true
      },
      "created_at" : 1.522708901189E9,
      "name" : "Isabel",
      "shifts" : {
        "04122018" : {
          "created_at" : 1.52399447195E9,
          "shift" : "-LAK8XrLRo6QgGMplEgB",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L97WToDjo1kejuZwLmc",
          "timestamp" : "04122018"
        }
      },
      "surname" : "Weys",
      "updated_at" : 1.523443691118E9
    },
    "-L9odW4Nyww3rSa55rRU" : {
      "checked_in" : 1.523820582874E9,
      "classrooms" : {
        "-L8nQ8kBCYfZizh2cshQ" : true
      },
      "created_at" : 1.523449205136E9,
      "name" : "Perico",
      "shifts" : {
        "04132018" : {
          "created_at" : 1.523994475455E9,
          "shift" : "-LAK8Yi6kYF8j9nZ8_eq",
          "shiftType" : "-LAK8VPvIHJZG8eLPlOS",
          "teacher" : "-L9odW4Nyww3rSa55rRU",
          "timestamp" : "04132018"
        }
      },
      "surname" : "de los Palotes",
      "updated_at" : 1.523530261085E9
    }
  },
  "teachers-non-assigned" : {
    "-L8n0MHItGqhXmbHRRcP" : true,
    "-L8n0OdlHMityBf5jjdv" : true,
    "-L9577wKyYOQl3Jm3zks" : true
  },
  "users" : {
    "atFXQcusIbhZHmxkoUqU2gcFSSy2" : {
      "displayName" : "a",
      "email" : "a@a.com",
      "lastLogin" : 1.523194826928E9,
      "photoURL" : "a.jpg"
    },
    "nRTZaWuFsgSfxWbfkVahkMpWfTI2" : {
      "displayName" : "b",
      "email" : "b@b.com",
      "lastLogin" : 1.524128881169E9,
      "photoURL" : "b.jpg"
    },
    "w7dkTDZTfNWhKVtMax1IFOWAjyu2" : {
      "displayName" : "c",
      "email" : "c@c.com",
      "lastLogin" : 1.52293892129E9,
      "photoURL" : "c.jpg"
    }
  }
}
