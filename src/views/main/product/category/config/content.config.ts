export const contentTableConfig = {
  title: '类别列表',
  // 表格头是否需要显示选中效果
  showSelectColumn: true,
  // 表格开头是否需要显示序号
  showIndexColumn: true,
  // el-tab 属性--是否可展开
  // childrenProps: {
  //   rowKey: 'id',
  //   treeProps: {
  //     children: 'children',
  //   },
  // },
  // 是否需要显示页脚--分页器
  // showFooter: false,
  propList: [
    {
      prop: 'name',
      slotName: 'name',
      label: '类别名称',
      minWidth: '180'
    },
    {
      prop: 'createAt',
      slotName: 'createAt',
      label: '创建时间',
      minWidth: '180'
    },
    {
      prop: 'updateAt',
      slotName: 'updateAt',
      label: '更新时间',
      minWidth: '180'
    },
    {
      slotName: 'handler',
      label: '操作',
      minWidth: '160'
    }
  ]
}
