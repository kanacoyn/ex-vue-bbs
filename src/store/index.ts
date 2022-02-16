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
      // 受け取ったpayload内のarticleをstateのarticlesの０番目に追加する
      state.articles.unshift(payload.article);
    },
    /**
     * コメントを追加する.
     * @param state
     * @param payload
     */
    // addComment(state, payload) {
    //   // 追加対象の記事を検索する
    //   const article = state.articles.find(
    //     (article) => article.id === comment.articleId
    //   );
    //   // payloadからコメントオブジェクトを生成する
    //   const comment = new Comment(
    //     payload.comment.id,
    //     payload.comment.name,
    //     payload.comment.content,
    //     payload.comment.articleId
    //   );
    //   // commentListにコメントを追加;
    //     // article.commentList.unshift(comment);
    //   }
    // },

    /**
     * 記事を削除する.
     * @param state
     * @param payload
     */
    // deleteArticle(state, payload) {
    //   // 渡されたpayload中のarticleindexから一件だけ削除する
    //   state.articles.splice(payload.articleIndex, 1);
    // },
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
      return state.articles;
    },
  },
});
