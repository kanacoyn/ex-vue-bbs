import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    articles: [
      new Article(3, "佐藤", "佐藤さんの記事", []),
      new Article(2, "山田", "山田さんの記事", [
        new Comment(13, "山崎", "山田の記事へコメントした山崎さん", 2),
      ]),
      new Article(1, "伊藤", "伊藤さんの記事", [
        new Comment(12, "鈴木", "伊藤の記事にコメントした鈴木さん", 1),
        new Comment(11, "吉田", "伊藤の記事にコメントした吉田さん", 1),
      ]),
    ],
  },
  mutations: {
    /**
     * 記事を追加する.
     * @param state
     * @param payload
     */
    addArticle(state, payload) {
      // 受け取ったpayload内のarticleをstateのarticlesの０番目に追加する
      state.articles.unshift(payload.article);
    },

    /**
     * コメントを追加する.
     * @param state -ステート
     * @param payload -ペイロード
     */
    addComment(state, payload) {
      // 追加対象の記事を検索する
      const newArray = state.articles.filter(
        (article) => article.id === payload.comment.articleId
      );
      const article = newArray[0];
      // payloadからコメントオブジェクトを生成する
      if (article) {
        // commentListにコメントを追加;
        article.commentList.unshift(payload.comment);
      }
    },

    /**
     * 記事をコメント共に削除する.
     * @param state -ステート
     * @param payload -ペイロード
     */
    deleteArticle(state, payload) {
      state.articles.splice(payload.articleIndex, 1);
    },
  },

  actions: {},
  modules: {},
  getters: {
    /**
     * 記事一覧を返す.
     * @param state - ステート
     * @returns 記事一覧
     */
    getArticles(state) {
      // stateのarticleを返す
      return state.articles;
    },
  },
});
