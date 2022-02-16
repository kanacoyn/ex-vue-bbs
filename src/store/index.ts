import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/article";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    articles: [
      new Article(3, "佐藤", "佐藤さんの記事", []),
      new Article(2, "山田", "山田さんの記事", [
        new Comment(13, "山崎", "山崎さんのコメント", 2),
      ]),
      new Article(1, "伊藤", "伊藤さんの記事", [
        new Comment(12, "鈴木", "鈴木さんのコメント", 1),
        new Comment(11, "吉田", "吉田さんのコメント", 1),
      ]),
    ],
  }, // end state
  mutations: {
    /**
     * 記事を追加する.
     * @param state
     * @param payload
     */
    addArticle(state, payload) {
      // 受け取ったpayloadないのarticleをstateのarticlesの０番目に追加する
    },

    /**
     * コメントを追加する
     * @param state
     * @param payload
     */
    addComment(state, payload) {
      //  渡されたpayloadの中のarticleから追加対象を検索する
    },

    /**
     * 記事を削除する.
     * @param state
     * @param payload
     */
    deleteArticle(state, payload) {
      // 渡されたpayload中のarticleindexから一件だけ削除する
    },
  },
  actions: {},
  modules: {},
  getters: {
    /**
     * 記事一覧を返す.
     * @param state
     */
    getArticles(state) {
      // stateのarticleを返す
    },
  },
});
