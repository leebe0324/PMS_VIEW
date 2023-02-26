import { createStore } from "vuex";
import { App } from "vue";

interface MenuObj {
  parentId: number;
  id: number;
  children?: MenuObj[];
}
interface State {
  menus: MenuObj[];
}
interface NewMenus {
  [key: number]: MenuObj;
}
const store = createStore<State>({
  state() {
    return {
      menus: [
        {
          id: 1,
          parentId: 0,
          title: "员工管理",
          level: 0,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
        {
          id: 2,
          parentId: 1,
          title: "员工名单",
          level: 1,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
        {
          id: 3,
          parentId: 0,
          title: "部门管理",
          level: 0,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
        {
          id: 4,
          parentId: 2,
          title: "部门名单",
          level: 1,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
        {
          id: 5,
          parentId: 0,
          title: "职位管理",
          level: 0,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
        {
          id: 6,
          parentId: 5,
          title: "职位名单",
          level: 1,
          sort: 0,
          name: "oms",
          icon: "order",
          hidden: 0,
        },
      ],
    };
  },
  getters: {
    getNewMenus(state) {
        console.log('-------')
      const newMenus: NewMenus = {};

      //获取旧的数据
      const menus = state.menus;
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].parentId === 0) {
          newMenus[menus[i].id] = { ...menus[i] };
        } else {
          let parentId = menus[i].parentId;
        //   newMenus[parentId].children = newMenus[parentId].children || [];
          newMenus[parentId].children?.push(menus[i]);
        }
      }
      return newMenus;
    },
  },
  mutations: {
    updateMenus(state, menus) {
      state.menus = menus;
    },
  },
  actions: {},
  modules: {},
});
export const initStore = (app: App<Element>) => {
  app.use(store);
};
