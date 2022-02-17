<template>
  <div class="content">
    <h1>掲示板</h1>
    <form>
      <div>
        投稿者名:<br />
        <input type="text" v-model="articleName" />
      </div>
      <div>
        投稿内容:<br />
        <textarea v-model="articleContent" rows="5" cols="70"></textarea>
      </div>
      <br />

      <button type="button" v-on:click="addArticle()">記事投稿</button>
    </form>
    <hr />
    <div v-for="article of currentArticleList" v-bind:key="article.id">
      <div>記事ID：{{ article.id }}</div>
      <div>投稿者名：{{ article.name }}</div>
      <div>投稿内容：{{ article.content }}</div>
      <br />
      <form>
        <button type="button" v-on:click="deleteArticle(articleIndex)">
          投稿を削除
        </button>
      </form>

      <div v-for="comment of article.commentList" v-bind:key="comment.id">
        <br />
        <div>コメント者名：{{ comment.name }}</div>
        <div>コメント内容：{{ comment.content }}</div>
        <br />
      </div>

      <div>名前：</div>
      <input type="text" v-model="commentName" /><br />
      コメント:<br />
      <textarea v-model="commentContent" rows="5" cols="40"></textarea><br />
      <button type="button" v-on:click="addComment(article.id)">
        コメントする</button
      ><br />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";
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
    if (articles.length !== 0) {
      newId = articles[0].id + 1;
    }
    // ミューテーションのaddArticleメソッドを呼ぶ
    this.$store.commit("addArticle", {
      article: new Article(
        newId,
        this.articleName,
        this.articleContent,
        new Array<Comment>()
      ),
    });
    this.articleName = "";
    this.articleContent = "";
  }

  /**
   * コメントを追加する
   */
  addComment(articleId: number): void {
    this.$store.commit("addComment", {
      comment: new Comment(
        -1,
        this.commentName,
        this.commentContent,
        articleId
      ),
    });
    this.commentName = "";
    this.commentContent = "";
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
