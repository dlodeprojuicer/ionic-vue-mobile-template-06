import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        name: "SnoopDogg",
        image: "brazil.jpg",
        id: 1,
        likes: 22349,
        description:
          "all about Brazil, suspendisse lobortis pharetra tempor. Cras eleifend ante sed arcu interdum, in bibendum enim ultricies. Integer rutrum quis risus at tempor."
      },
      {
        name: "BrookeShaden",
        image: "hawaii.jpg",
        id: 3
      },
      {
        name: "ThisIsRory",
        image: "panama.jpg",
        id: 2,
        likes: 390,
        description:
          "all about panama. Nam fermentum, leo ac lobortis tincidunt, justo felis semper nisi, sed facilisis quam ante a justo. Nam pulvinar nibh nec mi vestibulum cursus quis eget orci. Aenean faucibus faucibus ex, a imperdiet nibh luctus faucibus. Mauris porttitor, velit ac eleifend mattis, sem justo accumsan odio, ut mattis nulla nulla eu nibh."
      },
      {
        name: "Jamaican_tourism",
        slug: "jamaica",
        image: "jamaica.jpg",
        id: 4
      },
    ],
  },

  getters: {
    posts({ posts }) {
      return posts;
    }
  },
  mutations: {},
  actions: {},
});

export default store;
