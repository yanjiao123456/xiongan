import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: {title: '系统首页'}
                },
                //实时监测  start------------------------------------------------------------------------

                {
                    path: '/PeiDianTu',
                    component: resolve => require(['../components/page/ShiShiJianCe/PeiDianTu.vue'], resolve),
                    meta: {title: '配电图'}
                },
                {
                    path: '/PeiDianInquire',
                    component: resolve => require(['../components/page/ShiShiJianCe/PeiDianInquire.vue'], resolve),
                    meta: {title: '数据查询'}
                },
                {
                    path: '/ShiShiShuJu',
                    component: resolve => require(['../components/page/ShiShiJianCe/ShiShiShuJu.vue'], resolve),
                    meta: {title: '实时数据'}
                },
                {
                    path: '/YunXingBaoBiao',
                    component: resolve => require(['../components/page/ShiShiJianCe/YunXingBaoBiao.vue'], resolve),
                    meta: {title: '运行报表'}
                },
                {
                    path: '/YuanChengChaoBiao',
                    component: resolve => require(['../components/page/ShiShiJianCe/YuanChengChaoBiao.vue'], resolve),
                    meta: {title: '远程抄表'}
                },
                {
                    path: '/ShuJuDuiBi',
                    component: resolve => require(['../components/page/ShiShiJianCe/ShuJuDuiBi.vue'], resolve),
                    meta: {title: '数据对比'}
                },
                {
                    path: '/BianDianSuoZongLan',
                    component: resolve => require(['../components/page/ShiShiJianCe/BianDianSuoZongLan.vue'], resolve),
                    meta: {title: '变电所总览'}
                },
                {
                    path: '/BianDianQiJianCe',
                    component: resolve => require(['../components/page/ShiShiJianCe/BianDianQiJianCe.vue'], resolve),
                    meta: {title: '变电器监测'}
                },

                //实时监测  end--------------------------------------------------------------------------
                //能耗查询  start--------------------------------------------------------------------------

                {
                    path: '/inquire',
                    component: resolve => require(['../components/page/NengHaoChaXun/inquire.vue'], resolve),
                    meta: {title: '数据查询'}
                },


                //能耗查询  end--------------------------------------------------------------------------
                //能效分析  start--------------------------------------------------------------------------

                {
                    path: '/NengHaoQuShi',
                    component: resolve => require(['../components/page/NengXiaoFenXi/NengHaoQuShi.vue'], resolve),
                    meta: {title: '能耗趋势'}
                },
                {
                    path: '/NengHaoChengBen',
                    component: resolve => require(['../components/page/NengXiaoFenXi/NengHaoChengBen.vue'], resolve),
                    meta: {title: '能耗成本'}
                },
                {
                    path: '/DuiBiFenXi',
                    component: resolve => require(['../components/page/NengXiaoFenXi/DuiBiFenXi.vue'], resolve),
                    meta: {title: '对比分析'}
                },
                {
                    path: '/NengYuanJiHua',
                    component: resolve => require(['../components/page/NengXiaoFenXi/NengYuanJiHua.vue'], resolve),
                    meta: {title: '能源计划'}
                },
                {
                    path: '/RiFuHe',
                    component: resolve => require(['../components/page/NengXiaoFenXi/RiFuHe.vue'], resolve),
                    meta: {title: '日负荷'}
                },
                {
                    path: '/DingBiaoGuanLi',
                    component: resolve => require(['../components/page/NengXiaoFenXi/DingBiaoGuanLi.vue'], resolve),
                    meta: {title: '定标管理'}
                },
                {
                    path: '/KPIFenXi',
                    component: resolve => require(['../components/page/NengXiaoFenXi/KPIFenXi.vue'], resolve),
                    meta: {title: 'KPI分析'}
                },
                {
                    path: '/FengGuYongDian',
                    component: resolve => require(['../components/page/NengXiaoFenXi/FengGuYongDian.vue'], resolve),
                    meta: {title: '峰谷用电'}
                },

                //能效分析  end--------------------------------------------------------------------------



                //报警管理  start------------------------------------------------------------------------

                {
                    path: '/BaoJingGuanLi',
                    component: resolve => require(['../components/page/BaoJingGuanLi/BaoJingGuanLi.vue'], resolve),
                    meta: {title: '报警管理'}
                },
                {
                    path: '/BaoJingDingYi',
                    component: resolve => require(['../components/page/BaoJingGuanLi/BaoJingDingYi.vue'], resolve),
                    meta: {title: '报警定义'}
                },


                //报警管理  end--------------------------------------------------------------------------

                //电能质量  start--------------------------------------------------------------------------
                {
                    path: '/GongLvYinShu',
                    component: resolve => require(['../components/page/DianNengZhiLiang/GongLvYinShu.vue'], resolve),
                    meta: {title: '功率因数'}
                },

                //电能质量  end--------------------------------------------------------------------------
                //设备管理  start--------------------------------------------------------------------------
                {
                    path: '/YiBiaoTaiZhang',
                    component: resolve => require(['../components/page/SheBeiGuanLi/YiBiaoTaiZhang.vue'], resolve),
                    meta: {title: '仪表台账'}
                },
                {
                    path: '/SheBeiZongLan',
                    component: resolve => require(['../components/page/SheBeiGuanLi/SheBeiZongLan.vue'], resolve),
                    meta: {title: '设备总览'}
                },
                {
                    path: '/SheBeiDangAn',
                    component: resolve => require(['../components/page/SheBeiGuanLi/SheBeiDangAn.vue'], resolve),
                    meta: {title: '设备档案'}
                },
                //设备管理  end--------------------------------------------------------------------------





                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: {title: '自定义图标'}
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: {title: '基础表格'}
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: {title: 'tab选项卡'}
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: {title: '基本表单'}
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: {title: '富文本编辑器'}
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: {title: 'markdown编辑器'}
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: {title: '文件上传'}
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: {title: 'schart图表'}
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: {title: '拖拽列表'}
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: {title: '权限测试', permission: true}
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: {title: '404'}
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: {title: '403'}
                }
            ]
        },
        {
            path: '/pop',
            component: resolve => require(['../components/views/pop.vue'], resolve),
            meta: {title: '配电图弹框'}
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
