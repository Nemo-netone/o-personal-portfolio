export type Project = { id:number; slug:string; name:string; english:string; category:string; summary:string; features:string[]; tech:string[]; image?:string; featured?:boolean; mode:string }
const rows = [
['ssm98yok','农业信息管理平台','Agriculture Information System','行业管理','农业资讯、供需信息与后台运营管理。',['农业资讯浏览','供需信息管理','用户中心','后台运营'],['Vue 2','Spring Boot','MyBatis','Supabase'],'原系统部署'],
['nanjing','南京旅游服务平台','Nanjing Travel Guide','生活服务','聚合景点、酒店、餐饮、交通与游记。',['景点酒店浏览','旅游路线','收藏评论','后台管理'],['Vue 2','Spring Boot','CloudBase','Supabase'],'原系统部署'],
['qiyerenyuan','企业人员管理系统','Enterprise HRM','企业管理','覆盖员工、部门、考勤、薪资和权限。',['员工部门','考勤请假','薪资社保','角色权限'],['Vue 2','Element UI','Spring Boot','PostgreSQL'],'原系统部署'],
['aquaculturestaffperformancems','水产员工绩效系统','Aquaculture Performance','行业管理','水产企业人员档案与绩效数据管理。',['员工档案','绩效指标','统计概览','多角色'],['JavaScript','Workers','Supabase'],'云端兼容版'],
['gym-house','健身房管理平台','Gym House','生活服务','会员、课程、教练和场馆运营管理。',['会员管理','课程教练','预约记录','经营概览'],['HTML/CSS','JavaScript','Workers','Supabase'],'云端兼容版'],
['springbooth10zf','校园生活服务平台','Campus Life Service','教育校园','校园信息、生活服务与内容管理。',['校园信息','生活服务','内容运营','数据维护'],['Spring Boot','Cloudflare Pages','Supabase'],'云端兼容版'],
['code','综合业务管理系统','Business Suite','企业管理','用户、业务数据和运营管理后台。',['业务列表','统计展示','角色登录','CRUD'],['Java','HTML/CSS','Workers','Supabase'],'云端兼容版'],
['xianzhijiaoyi','闲置物品交易平台','Second-hand Marketplace','电商交易','闲置商品发布、浏览和交易管理。',['商品浏览','分类搜索','交易管理','用户后台'],['Vue','Cloudflare Pages','Workers','Supabase'],'云端兼容版'],
['ssmw7150cne','课程资源管理平台','Course Resource Center','教育校园','课程内容、学习资源和用户运营。',['课程资源','分类检索','角色管理','内容维护'],['SSM','JavaScript','Workers','Supabase'],'云端兼容版'],
['springboot39772449','宠物寄养服务平台','Pet Boarding Service','生活服务','连接宠物主人与寄养服务方。',['寄养服务','订单管理','宠物档案','护理文章'],['Spring Boot','Workers','Supabase'],'云端兼容版'],
['springboot3gqhf8g4','生猪养殖管理平台','Pig Farming Management','行业管理','养殖档案、生产记录与经营数据。',['养殖档案','生产记录','数据统计','多角色'],['Spring Boot','Pages Functions','Supabase'],'云端兼容版'],
['meizhuang','美妆商城管理平台','Beauty Commerce','电商交易','美妆商品、品牌、用户与商城运营。',['商品管理','品牌分类','角色登录','业务 CRUD'],['HTML/CSS','JavaScript','Workers','Supabase'],'云端兼容版'],
['zhihuijiaoyu','智慧教育平台','Smart Education','教育校园','连接课程、教师、学生和教学运营。',['课程教师','学生信息','教学概览','多角色'],['Java','Cloudflare Pages','Workers','Supabase'],'云端兼容版'],
['xm-film-ticket','电影票务管理平台','Film Ticketing','文娱社区','影片展示、票务信息和订单管理。',['影片场次','票务订单','收藏推荐','内容运营'],['Vue','Spring Boot','Workers','Supabase'],'云端兼容版'],
['dongmanluntan','动漫论坛社区','Anime Community','文娱社区','文章、评论、收藏和积分排行社区。',['动漫文章','评论收藏','积分排行','内容后台'],['Vue 2','Element UI','Spring Boot','Supabase'],'原系统部署'],
['shequguanli','社区物业管理平台','Community Property','生活服务','社区信息、物业报修与投诉建议。',['社区信息','在线报修','投诉建议','物业人员'],['Spring Boot','JavaScript','Workers','Supabase'],'云端兼容版'],
['animal-shop','宠物用品商城','Animal Shop','电商交易','宠物用品、供应商和用户运营。',['商品展示','分类供应商','用户登录','商城维护'],['Java','Cloudflare Pages','Workers','Supabase'],'云端兼容版'],
['shenghuojilu','生活记录管理平台','Life Journal','生活服务','日常事项、内容分类和生活数据。',['生活记录','内容分类','数据概览','用户角色'],['HTML/CSS','Workers','Supabase'],'云端兼容版'],
['weiting','微厅业务管理平台','Weiting Platform','企业管理','服务信息、业务记录和平台运营。',['服务信息','业务记录','账号角色','运营概览'],['Java','Pages Functions','Supabase'],'云端兼容版'],
['shoujijiaoyi','手机交易平台','Mobile Marketplace','电商交易','手机商品浏览、交易信息和运营管理。',['手机商品','品牌参数','交易记录','后台维护'],['Spring Boot','JavaScript','Workers','Supabase'],'云端兼容版']
] as const
const images=new Set([1,2,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20]); const featured=new Set([1,2,8,10,12,14,15,20])
export const projects:Project[]=rows.map((r,i)=>({id:i+1,slug:r[0],name:r[1],english:r[2],category:r[3],summary:r[4],features:[...r[5]],tech:[...r[6]],mode:r[7],image:images.has(i+1)?`/projects/${String(i+1).padStart(2,'0')}.png`:undefined,featured:featured.has(i+1)}))
