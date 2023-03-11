import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  labelWidth: '100px',
  itemStyle: {
    padding: '5px 40px'
  },
  colLayout: {
    xl: 6, // >=1920
    lg: 8, // >=1200
    md: 12, // >=992
    sm: 24, // >=768
    xs: 24 // <=768
    // span: 8
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      },
      placeholder: '请选择创建时间'
    }
  ]
}
