<template>
  <div id="app">
    <van-button type="primary">hello</van-button>
    <van-cell-group>
      <van-cell
        icon="location-o"
        title="单元格"
        value="内容"
        label="do something"
        is-link
      />
    </van-cell-group>
    <div class="margin">
      <van-icon name="chat-o" badge="9" />
      <van-icon name="chat-o" badge="99+" />
    </div>
    <div class="margin">
      <van-icon class-prefix="iconfont" name="auto" />
      <van-icon class-prefix="iconfont" name="all" />
      <van-icon class-prefix="iconfont" name="shoucang1" />
      <van-icon class-prefix="iconfont" name="siliao" />
      <van-icon class-prefix="iconfont" name="tuichu" />
    </div>
    <div class="margin" style="padding:0 20px">
      <van-row gutter="20">
        <van-col span="8">
          <van-image
            width="100"
            height="100"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <p>default = fill</p>
        </van-col>
        <van-col v-for="item in imglist" :key="item" span="8">
          <van-image
            width="100"
            height="100"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
            :fit="item"
          />
          <p>{{ item }}</p>
        </van-col>
      </van-row>
    </div>
    <div class="margin">
      <van-row type="flex" justify="space-between">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>
    </div>
    <div class="margin">
      <van-cell is-link @click="showPopup">展示弹出层</van-cell>
      <van-popup
        v-model="show"
        position="top"
        :style="{ height: '30%' }"
        closeable
        close-icon-position="top-left"
        round
      >
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
        </ul>
      </van-popup>
    </div>
    <!-- 最多显示一行 -->
    <div class="margin van-ellipsis">
      这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略
    </div>

    <!-- 最多显示两行 -->
    <div class="margin van-multi-ellipsis--l2">
      这是一段最多显示两行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略
    </div>

    <!-- 最多显示三行 -->
    <div class="margin van-multi-ellipsis--l3">
      这是一段最多显示三行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略
    </div>
    <div class="margin">
      <div
        class="van-hairline--bottom"
        style="width:100%;height:100px;background:#fff"
      ></div>
    </div>

    <div class="margin no-center">
      <!-- 淡入 -->
      <transition :name="`van-slide-$transitions[transitionIndex]`">
        <div v-show="visible" class="van-demo-slide">Fade</div>
      </transition>
      <van-cell-group>
        <van-cell value="up" is-link @click="chagneIndex(0)" />
        <van-cell value="down" is-link @click="chagneIndex(1)" />
        <van-cell value="left" is-link @click="chagneIndex(2)" />
        <van-cell value="right" is-link @click="chagneIndex(3)" />
      </van-cell-group>
    </div>
    <div class="margin">
      <van-cell title="选择单个日期" :value="date" @click="dateshow = true" />
      <van-calendar v-model="dateshow" @confirm="onConfirm" />
    </div>
    <div class="margin">
      <van-cell-group>
        <van-field
          label="用户名"
          v-model="value"
          type="text"
          placeholder="请输入用户名"
        />
      </van-cell-group>
    </div>
    <div class="margin">
      <van-cell-group>
        <van-field
          label="手机号"
          v-model="valueNumber"
          type="number"
          placeholder="手机号"
        />
      </van-cell-group>
    </div>
    <div class="margin">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: ["contain", "cover", "fill", "none", "scale-down"],
      show: false,
      visible: false,
      transitionIndex: 0,
      transitions: ["top", "bottom", "left", "right"],
      date: "",
      dateshow: false,
      value: "",
      valueNumber: "",
      username: "",
      password: ""
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    chagneIndex(index) {
      this.visible = true;
      this.transitionIndex = index;
    },
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.dateshow = false;
      this.date = this.formatDate(date);
    },
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>

<style lang="less">
.no-center {
  text-align: left;
}
.margin {
  margin: 20px 0;
  text-align: center;
}
.van-demo-slide {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  background-color: #1989fa;
  border-radius: 3px;
}
</style>
