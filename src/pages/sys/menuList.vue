<template>
  <imp-panel>
    <h3 class="box-title" slot="header" style="width: 100%;">
      <el-button type="primary" icon="plus" @click="newAdd">新增</el-button>
      <el-button type="danger" icon="delete" @click="batchDelete">删除</el-button>
    </h3>
    <el-row slot="body" :gutter="24" style="margin-bottom: 20px;">
      <el-col :span="6" :xs="24" :sm="24" :md="6" :lg="6" style="margin-bottom: 20px;">
        <el-tree v-if="menuTree"
                 ref="menuTree"
                 :data="menuTree"
                 show-checkbox
                 highlight-current
                 :render-content="renderContent"
                 @node-click="handleNodeClick" clearable node-key="id" :props="defaultProps"></el-tree>
      </el-col>
      <el-col :span="18" :xs="24" :sm="24" :md="18" :lg="18">
        <el-card class="box-card">
          <div class="text item">
            <el-form :model="form" ref="form">
              <el-form-item label="父级" :label-width="formLabelWidth">
                <!--<el-input v-model="form.parentId" auto-complete="off"></el-input>-->
                <el-select-tree v-model="form.parentId" :treeData="menuTree" :propNames="defaultProps" clearable
                                placeholder="请选择父级">
                </el-select-tree>
              </el-form-item>
              <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="链接" :label-width="formLabelWidth">
                <el-input v-model="form.href" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="是否显示" :label-width="formLabelWidth">
                <el-radio class="radio" v-model="form.isShow" label="1">显示</el-radio>
                <el-radio class="radio" v-model="form.isShow" label="0">不显示</el-radio>
              </el-form-item>
              <el-form-item label="图标" :label-width="formLabelWidth">
                <i :class="form.icon" v-model="form.icon"></i>
                <el-button type="text" @click="selectIconDialog=true">选择</el-button>
              </el-form-item>
              <el-form-item label="排序" :label-width="formLabelWidth">
                <el-slider v-model="form.sort"></el-slider>
              </el-form-item>
              <el-form-item label="" :label-width="formLabelWidth">
                <el-button type="primary" @click="onSubmit" v-text="form.id?'修改':'新增'"></el-button>
                <el-button type="danger" @click="deleteSelected" icon="delete" v-show="form.id && form.id!=null">删除
                </el-button>
              </el-form-item>
            </el-form>
          </div>
          <el-dialog title="选择图标" v-model="selectIconDialog" size="tiny">
            <select-icon-dialog @selectIcon="selectIcon"></select-icon-dialog>
            <span slot="footer" class="dialog-footer">
          <el-button @click="selectIconDialog = false">取 消</el-button>
          <el-button type="primary" @click="selectIconDialog = false">确 定</el-button>
          </span>
          </el-dialog>
        </el-card>
      </el-col>
    </el-row>
  </imp-panel>

</template>
<script type="text/babel">

  import panel from '../../components/panel.vue'
  import selectTree from '../../components/selectTree.vue'
  import selectIconDialog from './selectIconDialog'
  import treeter from '../../common/treeter'
  import merge from 'element-ui/src/utils/merge'

  import * as api from '../../config/apiConfig'
  import * as sysApi from '../../services/adminApi'

  export default {
    mixins: [treeter],
    components: {
      'imp-panel': panel,
      'el-select-tree': selectTree,
      'select-icon-dialog':selectIconDialog
    },
    data () {
      return {
        selectIconDialog: false,
        formLabelWidth: '100px',
        defaultProps: {
          children: 'children',
          label: 'name',
          id: 'id',
        },
        maxId: 7000000,
        menuTree: [],
        form: {
          id: null,
          name: '',
          sort: 0,
          icon: '',
          href: '',
          isShow: '',
          delivery: false,
          parentId: null,
          desc: ''
        }
      }
    },
    methods: {
      selectIcon (event) {
        this.form.icon = event.target.className
        this.selectIconDialog = false
      },
      renderContent (h, {node, data, store}) {
        return (
          <span>
            <span>
              <span><i class={data.icon}></i>&nbsp;{node.label}</span>
            </span>
          </span>)
      },
      newAdd () {
        this.form = {
          id: null,
          name: '',
          sort: 0,
          icon: '',
          href: '',
          isShow: '',
          delivery: false,
          parentId: null,
          desc: ''
        }
      },
      deleteSelected () {
        this.$http.get(api.SYS_MENU_DELETE + '?menuIds=' + this.form.id)
          .then(res => {
            this.$message('操作成功')
            this.deleteFromTree(this.menuTree, this.form.id)
            this.newAdd()
          }).catch(e => {
          this.$message('操作成功')
          this.deleteFromTree(this.menuTree, this.form.id)
          this.newAdd()
        })
      },
      batchDelete () {
        var checkKeys = this.$refs.menuTree.getCheckedKeys()
        if (checkKeys == null || checkKeys.length <= 0) {
          this.$message.warning('请选择要删除的资源')
          return
        }
        this.$confirm('确定删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get(api.SYS_MENU_DELETE + '?menuIds=' + checkKeys.join(','))
            .then(res => {
              this.$message('操作成功')
              this.load()
            }).catch(e => {
            this.$message('操作成功')
            this.batchDeleteFromTree(this.menuTree, checkKeys)
          })
        })
      },
      handleNodeClick (data) {
        this.form = merge({}, data)
      },
      onSubmit () {
        if (this.form.id == null) {
          this.$http.post(api.SYS_MENU_ADD, this.form)
            .then(res => {
              this.$message('操作成功')
              this.form.id = res.data.id
              this.appendTreeNode(this.menuTree, res.data)
            }).catch(e => {
            this.maxId += 1
            this.$message('操作成功')
            this.form.id = this.maxId
            var ddd = {
              id: this.form.id,
              name: this.form.name,
              sort: this.form.sort,
              icon: this.form.icon,
              href: this.form.href,
              isShow: this.form.isShow,
              delivery: this.form.delivery,
              parentId: this.form.parentId,
              desc: this.form.desc,
              children: []
            }
            this.appendTreeNode(this.menuTree, ddd)
            this.menuTree.push({})
            this.menuTree.pop()
          })
        } else {
          this.$http.post(api.SYS_MENU_UPDATE, this.form)
            .then(res => {
              this.$message('操作成功')
              this.updateTreeNode(this.menuTree, res.data)
            }).catch(e => {
            this.$message('操作成功')
            this.updateTreeNode(this.menuTree, merge({}, this.form))
          })
        }
      },
      load () {
        sysApi.menuList().then(res => {
          this.menuTree = res.data.content
        })
      }
    },
    created () {
      this.load()
    }
  }
</script>


