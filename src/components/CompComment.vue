<template>
  <div>
    <div>名前：</div>
    <input type="text" v-model="commentName" /><br />
    コメント:<br />
    <textarea v-model="commentContent" rows="5" cols="40"></textarea><br />
    <button type="button" v-on:click="addComment(article.id)">
      コメントする
    </button>
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Comment } from "@/types/comment";
@Component
export default class CompComment extends Vue {
  // コメント名
  private commentName = "";
  // コメント内容
  private commentContent = "";

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
}
</script>
