export type Project = { id:number; slug:string; name:string; english:string; category:string; summary:string; features:string[]; tech:string[]; github:string; demo:string; image?:string; featured?:boolean; mode:'原站已恢复' }
const rows = [
['ssm98yok','美食城小吃自助管理系统','Food City Self-service System','餐饮电商','餐厅、小吃、购物车、订单、评价与后台运营管理。',['餐厅与菜品','购物车订单','评价收藏','后台管理'],['HTML','Vue 2','Java SSM','Supabase'],'原站已恢复'],
['nanjing','南京旅游名胜景点管理系统','Nanjing Scenic Spot System','文旅服务','南京景点、酒店、路线、游记与旅游服务管理。',['景点酒店浏览','旅游路线','收藏评论','后台管理'],['Vue 2','Element UI','Spring Boot','Supabase'],'原站已恢复'],
['qiyerenyuan','企业人力资源管理系统','Enterprise HRM','企业管理','覆盖员工、部门、考勤、薪资和权限的人力资源平台。',['员工部门','考勤请假','薪资社保','角色权限'],['Vue 2','Element UI','Spring Boot','Supabase'],'原站已恢复'],
['aquaculturestaffperformancems','水产人员绩效管理系统','Aquaculture Staff Performance','行业管理','水产养殖场人员、任务、工作记录、绩效与奖惩管理。',['人员档案','任务记录','绩效奖惩','养殖指标'],['Spring Boot','JSP','Pages Functions','Supabase'],'原站已恢复'],
['gym-house','Gym House 健身房管理系统','Gym House Management','生活服务','课程、预约、器材、打卡、成就、商品和交易统一管理。',['会员管理','课程教练','预约打卡','器材商品'],['HTML/CSS','JavaScript','Pages Functions','Supabase'],'原站已恢复'],
['springbooth10zf','美食交流与菜品分享平台','Food Sharing Platform','餐饮社区','中外美食、热门菜品、资讯、论坛和留言管理。',['菜品分享','美食资讯','论坛留言','后台运营'],['Spring Boot','Vue','Pages Functions','Supabase'],'原站已恢复'],
['code','OT Code 雪地靴商城','Snow Boots Mall','电商交易','面向鞋品零售的商品、购物车、订单和穿搭内容商城。',['商品目录','购物车','订单管理','穿搭内容'],['HTML/CSS','JavaScript','Pages Functions','Supabase'],'原站已恢复'],
['xianzhijiaoyi','闲置物品交易系统','Second-hand Trading System','电商交易','面向校园与社区的闲置商品、求购、订单与留言平台。',['商品浏览','求购信息','交易订单','收藏留言'],['Vue','Spring Boot','Pages Functions','Supabase'],'原站已恢复'],
['ssmw7150cne','校园活动管理系统','Campus Activity System','教育校园','校园活动发布、报名、分类检索和运营管理。',['活动浏览','在线报名','分类检索','后台管理'],['Vue 2','SSM','Pages Functions','Supabase'],'原站已恢复'],
['springboot39772449','小区宠物寄养系统','Community Pet Boarding','生活服务','连接小区宠物主人与寄养服务方的业务平台。',['寄养服务','订单管理','宠物档案','护理文章'],['Vue','Spring Boot','Pages Functions','Supabase'],'原站已恢复'],
['springboot3gqhf8g4','瑞牧生猪养殖信息管理系统','Pig Farming Information System','行业管理','生猪档案、疫苗、饲料、生产记录与经营数据管理。',['生猪档案','疫苗饲料','生产记录','数据统计'],['Vue','Spring Boot','Pages Functions','Supabase'],'原站已恢复'],
['meizhuang','美妆商城管理平台','Beauty Commerce Platform','电商交易','化妆品、品牌、购物车、订单、评价与商城运营。',['美妆商品','品牌分类','购物车订单','客户咨询'],['HTML/CSS','JavaScript','Pages Functions','Supabase'],'原站已恢复'],
['zhihuijiaoyu','智慧教育学习平台','Smart Education Platform','教育校园','连接课程、教师、学生和教学运营的智慧教育平台。',['课程教师','学生信息','教学概览','多角色管理'],['Spring Boot','Vue 2','Pages Functions','Supabase'],'原站已恢复'],
['xm-film-ticket','电影票务管理平台','Film Ticketing Platform','文娱社区','影片展示、场次、购票订单、收藏推荐与内容运营。',['影片场次','票务订单','收藏推荐','内容运营'],['Vue','Spring Boot','Pages Functions','Supabase'],'原站已恢复'],
['dongmanluntan','动漫论坛平台','Anime Forum Platform','文娱社区','面向动漫内容的文章、评论、收藏、积分排行与后台管理社区。',['动漫文章','评论收藏','积分排行','内容后台'],['Vue 2','Element UI','Spring Boot','Supabase'],'原站已恢复'],
['shequguanli','社区物业管理系统','Community Property System','生活服务','社区信息、物业报修、投诉建议和物业人员管理。',['社区信息','在线报修','投诉建议','物业人员'],['Vue','Spring Boot','Pages Functions','Supabase'],'原站已恢复'],
['animal-shop','宠物用品商城','Pet Supplies Mall','电商交易','宠物食品、用品、供应商、用户与商城运营。',['商品展示','分类供应商','用户登录','商城维护'],['Vue','Java','Pages Functions','Supabase'],'原站已恢复'],
['shenghuojilu','旅行生活记录','Travel Life Journal','文旅服务','记录城市、景点、旅行故事和个人旅程内容。',['旅行记录','城市景点','游记分类','数据概览'],['HTML/CSS','JavaScript','Pages Functions','Supabase'],'原站已恢复'],
['weiting','共享单车运营平台','Bike Sharing Operations','城市治理','共享单车车辆投放、维修调度和运营数据管理。',['车辆管理','投放调度','维修记录','运营概览'],['Java','JavaScript','Pages Functions','Supabase'],'原站已恢复'],
['shoujijiaoyi','新蜂手机商城','NewBee Mobile Mall','电商交易','手机、智能穿戴、影音、电脑和周边配件商城。',['手机商品','分类检索','订单会员','商城后台'],['Java','JavaScript','Pages Functions','Supabase'],'原站已恢复']
] as const
const images=new Set([1,2,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20]); const featured=new Set([1,2,7,8,11,13,15,20])
export const projects:Project[]=rows.map((r,i)=>{const id=i+1,slug=r[0];return {id,slug,name:r[1],english:r[2],category:r[3],summary:r[4],features:[...r[5]],tech:[...r[6]],mode:r[7],github:`https://github.com/Nemo-netone/ot-${slug}`,demo:`https://ot-${slug}.pages.dev`,image:images.has(id)?`/projects/${String(id).padStart(2,'0')}.png`:undefined,featured:featured.has(id)}})
