import { Table, Pagination, Loading } from 'element-ui';
import Vue from 'vue';

export default {
  name: 'ExTable',
  mixins: [Table],
  props: {
    showPagination: {
      type: Boolean,
      default: true
    },
    pager_layout: {
      type: String,
      default: 'prev, pager, next'
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    searchMethod: {
      type: Function,
      default: () => {}
    }
  },
  watch: {
    pageTotal(val) {
      this.pagination.total = val
      this.pagination && (this.pagination.$el.style.display = val > this.pageSize ? '' : 'none')
    }
  },
  data() {
    return {
      pagination: null,
      pageTotal: 0
    }
  },
  methods: {
    setCurrentPage(page) {
      console.log('page...', page)
      this.pagination.currentPage = page;
      this.fetchData();
    },
    setPageSize(size) {
      this.pagination.pageSize = size;
      if (this.pagination.currentPage === 1) {
        this.fetchData();
      } else {
        this.pagination.currentPage = 1;
      }
    },
    fetchData() {
      let loadingInstance = Loading.service({
        target: this.$el.parentNode,
        fullscreen: false,
        text: '拼命加载中...'
      });
      this.searchMethod({
        currentPage: this.pagination.currentPage,
        pageSize: this.pagination.pageSize
      }, () => {
        // 以服务的方式调用的 Loading 需要异步关闭
        loadingInstance.close();
      });
    },
    mountPagination() {
      const container = document.createElement('div');
      const parent = this.$el.parentNode;
      if (parent.lastChild == this.$el) {
        parent.appendChild(container);
      } else {
        parent.insertBefore(container, this.$el.nextSibling);
      }
      const Pager = Vue.extend(Pagination);
      this.pagination = new Pager({
        // components: { Pagination },
        propsData: {
          pageSize: this.pageSize,
          pageSizes: this.pageSizes,
          layout: this.pager_layout,
          total: 0,
          currentPage: 1,
          background: false
        }
      });
      this.pagination.$on('total', (newTotal) => {
        console.log(newTotal)
      });
      this.pagination.$on('current-change', this.setCurrentPage);
      this.pagination.$on('size-change', this.setPageSize);
      this.pagination.$mount(container);
    }
  },
  mounted() {
    if (this.showPagination) {
      this.mountPagination();
    }
  },
  beforeDestroy() {
    this.pagination.$off('current-change', this.setCurrentPage);
    this.pagination.$off('size-change', this.setPageSize);
  }
}
