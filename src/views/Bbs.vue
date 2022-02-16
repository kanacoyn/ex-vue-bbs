<template>
  <div class="content">
    <h1>掲示板</h1>
    <form>
      <div>
        投稿者名:
        <input type="text" v-model="articleName" />
      </div>
      <div>
        投稿内容:
        <textarea v-model="articleContent" rows="5" cols="70"></textarea>
      </div>
      <button type="button" v-on:click="addArticle()">記事投稿</button>
    </form>
    <hr />
    <div v-for="article of currentArticleList" v-bind:key="article.id">
      <div>記事ID：{{ article.id }}</div>
      <div>投稿者名：{{ article.name }}</div>
      <div>投稿内容：{{ article.content }}</div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Article } from "@/types/article";
@Component
export default class Bbs extends Vue {
  // 現在の記事一覧
  private currentArticleList = new Array<Article>();
  // 投稿者名
  private articleName = "";
  // 投稿内容
  private articleContent = "";
  // コメント名
  private commentName = "";
  // コメント内容
  private commentContent = "";

  /**
   * 記事一覧を表示する.
   *
   * @remarks Vuexストア内のarticlesをcurrentArticleListに格納
   */
  created(): void {
    this.currentArticleList = this.$store.getters.getArticles;
  }
  /**
   * 記事を追加する.
   */
  addArticle(): void {
    let articles = this.$store.getters.getArticles;
    let newId = 0;
    if (articles.length) {
      newId = articles[0].id + 1;
    }
    // ミューテーションのaddArticleメソッドを呼ぶ
    this.$store.commit("addArticle", {
      article: new Article(newId, this.articleName, this.articleContent, []),
    });
  }

  /**
   * 記事を削除する.
   *
   * @param articleIndex
   */
  deleteArticle(articleIndex: number): void {
    this.$store.commit("deleteArticle", {
      articleIndex: articleIndex,
    });
  }
}
</script>

<style scoped></style>
