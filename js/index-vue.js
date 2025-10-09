const vm =Vue.createApp({
    data(){
        return{
            doings:[
                {
                    t:"校慶倒數開始！",
                    d1:"活動提醒：踏入浪人季前，距離盛典只剩下 8 天！準備迎接 3 月起一場充滿藝術與文化的盛會！",
                    id:"0",
                },
                {
                    t:"國際交流預告",
                    d1:"活動消息：3 月 3 日將迎來來自巴黎藝術學院的代表，與我們練習生分享藝術視野。",
                    id:"1",
                },
                {
                    t:"草間彌生親臨分享生命經歷",
                    d1:"藝點亮：3 月 12 日，我們驕傲地宣布，世界知名藝術家草間彌生將親自指導學生藝術創作歷程！",
                    id:"2",
                },
                {
                    t:"活動日曆更新",
                    d1:"提醒大家：活動日曆已更新，拜託你們不要錯過 3 月 15 日至 3 月 20日期間的精彩表演和工作坊！",
                    id:"3",
                },
                {
                    t:"主題展覽倒數",
                    d1:"提醒大家：藝術展覽倒數計時中，3 月 28 日即將展出的主題作品，提前感受藝術的饗宴。",
                    id:"4",
                },
                {
                    t:"即時對話服務上線",
                    d1:"活動消息：有問題？現在可以透過我們的即時線上服務找到解答，快來詢問有關活動的所有問題！",
                    id:"5",
                },
                {
                    t:"國際友校交流直播",
                    d1:"活動亮點：3 月 30 日我們將進行與日本東京藝術大學的網上直播交流，一窺他們的特色和文化。",
                    id:"6",
                },
                
            ],
            nnnews:[
                {
                    main:"W1-浪人季開幕週",
                    t:"浪人季開幕週",
                    c:"#9bcf53",
                    sd:"10px 10px 10px #9cbf53",
                    d1:"開幕典禮 | 學生家長之夜 - 藝術創作現場 | 國際美食展...",
                    tit1:"東花浪人季世界開幕週 - 開幕典禮",
                    tit2:"學生家長之夜 - 課程深度探索",
                    tit3:"學生家長之夜 - 藝術創作現場",
                    tit4:"外賓專屬活動",
                    tit5:"國際美食展",
                    t1:"3 月 1 日 、 15:00 - 17:00 | 歡迎詞和浪人季活動介紹。",
                    t2:"3 月 2 日 、 18:00 - 20:00 | 深入課程的核心，參與各項工作坊和實驗，了解孩子在不同領域的學習。",
                    t3:"3 月 2 日 、 18:00 - 20:00 | 走進孩子的藝術天地，親身參與各種藝術創作活動，感受學生的創造力。",
                    t4:"3 月 4 日 ~ 3 月 5 日 | 包括參觀校園、座談會等。",
                    t5:"3 月 6 日 、 14:00 - 21:00 | 提供各國特色美食品嚐。",
                    img1:"./img/2-1.jpg",
                    id:"0",
                },
                {
                    main:"W2-跨文化交流週",
                    t:"跨文化交流週",
                    c:"#7aba78",
                    sd:"10px 10px 10px #7aba78",
                    d1:"跨文化藝術對話論壇 | 國際教育論壇 | 學生藝術作品展覽...",
                    tit1:"跨文化藝術對話論壇",
                    tit2:"學生藝術作品展覽",
                    tit3:"跨學校合作日",
                    tit4:"藝術家座談會",
                    tit5:"國際教育論壇",
                    tit6:"藝術工作坊",
                    tit7:"文化交流日",
                    t1:"3 月 8 日 、 15:00 - 17:00 | 邀請跨領域藝術家進行對話，分享不同文化對藝術的啟發。",
                    t2:"3 月 9 日 | 展示學生的藝術創作，包括繪畫、雕刻、攝影等多種形式。",
                    t3:"3 月 10 日 | 與其他學校進行合作，共同探討教學方法和課程設計。",
                    t4:"3 月 11 日 、 14:00 - 16:00 | 邀請藝術家分享其創作心得和藝術理念，與參與者進行互動。",
                    t5:"3 月 12 日 、 10:00 - 12:00 | 與姐妹校代表及教育專業人士進行深入的教育交流和合作討論。",
                    t6:"3 月 13 日 、 14:00 - 18:00 | 提供各類藝術工作坊，讓參與者親身體驗不同藝術形式的製作。",
                    t7:"3 月 14 日 | 安排不同文化的展覽攤位，並有文化表演和交流活動。",
                    img1:"./img/2-2.jpg",
                    id:"1",
                },
                {
                    main:"W3-教育專業交流週",
                    t:"教育專業交流週",
                    c:"#f0c846",
                    sd:"10px 10px 10px #f0c846",
                    d1:"教育專業論壇 | 藝術教育座談會 | 跨校課程設計競賽...",
                    tit1:"教育專業論壇",
                    tit2:"跨校教學示範",
                    tit3:"學科合作工作坊",
                    tit4:"藝術教育座談會",
                    tit5:"跨校課程設計競賽",
                    tit6:"教育科技融合工作坊",
                    tit7:"文化交流日",
                    t1:"3 月 15 日 、 14:00 - 16:00 | 邀請來自姐妹校和其他教育機構的代表，進行教育專業的深入討論，分享各校的教學心得和最佳實踐。",
                    t2:"3 月 16 日 、 10:00 - 12:00 | 姐妹校教師進行實地教學示範，展示各校不同的教學風格和方法。",
                    t3:"3 月 17 日 、 14:00 - 16:00 | 由各校學科主管和老師參與的工作坊，討論跨校學科合作的可能性，促進不同學科之間的連結。",
                    t4:"3 月 18 日 、 10:00 - 12:00 | 聚焦藝術教育的座談會，邀請藝術教育專家和藝術老師分享最新的教學理念和藝術教育的未來發展趨勢。",
                    t5:"3 月 19 日 、 14:00 - 17:00 | 各校教師組隊參與跨校課程設計競賽，透過合作設計創新課程，提升教學品質和豐富學科內容。",
                    t6:"3 月 20 日 、 10:00 - 12:00 | 探討教育科技在課堂中的應用，邀請科技教育專家分享最新的教育科技趨勢，並進行實際應用案例的演示。",
                    t7:"3 月 21 日 、 15:00 - 17:00 | 各校教師展示教育成果，總結教育專業交流週的收獲，分享彼此的教學心得和未來合作的可能性。",
                    img1:"./img/2-3.jpg",
                    id:"2",
                },
                {
                    main:"W4-教育專業交流週",
                    t:"教育專業閉幕週",
                    c:"#9bcf53",
                    sd:"10px 10px 10px #9bcf53",
                    d1:"藝術大師講座 | 藝術探索之旅 | 藝術家交流晚宴...",
                    tit1:"藝術大師講座",
                    tit2:"藝術家工作坊",
                    tit3:"藝術探索之旅",
                    tit4:"學術研討會",
                    tit5:"藝術展覽與評選",
                    tit6:"藝術家交流晚宴",
                    tit7:"藝術作品拍賣",
                    t1:"3 月 22 日 、 14:00 - 17:00 | 邀請知名藝術家董陽孜進行講座，分享其藝術創作心得、藝術理念，以及對當代藝術與書法撞擊的看法。",
                    t2:"3 月 23 日 、 10:00 - 12:00 | 藝術家現場指導工作坊，學生和參與者有機會親自參與藝術創作，與藝術家近距離交流，感受藝術的魅力。",
                    t3:"3 月 24 日 、 09:00 - 17:00 | 安排參觀當地藝術博物館、畫廊，以及城市中的藝術品和雕塑，豐富參與者的視野，啟發藝術的不同面向。",
                    t4:"3 月 25 日 、 14:00 - 17:00 | 邀請藝術研究專家和學者進行學術發表，探討藝術研究的最新趨勢和未來發展，促進學術交流。",
                    t5:"3 月 26 日 、 10:00 - 17:00 | 學生和藝術家共同參與的藝術展覽，展示各種藝術作品，同時進行評選，選出優秀作品進行獎勵，鼓勵學生更積極參與藝術創作。",
                    t6:"3 月 27 日 、 18:00 - 21:00 | 邀請藝術家、學生和參與者共進晚餐，進一步深化交流，分享藝術心得，提升藝術共同體的凝聚力。",
                    t7:"3 月 28 日 、 15:00 - 17:00 | 舉辦藝術作品拍賣活動，募集資金支持藝術教育計劃，同時為參與者提供購買藝術品的機會，促進藝術市場的活躍。",                    
                    img1:"./img/2-4.jpg",
                    id:"3",
                },
            ],
            products:[
                {
                    t:"學術講座",
                    img1:"./img/3-1.jpg",
                    set:"88% OFF",
                    d1:"提醒已報名者：藝術Ｘ學術融合，3 月 15 日藝術史學者葛瑞絲·安德森博士將進行學術講座。",
                    price:100,
                    amount:0,
                    as:1,
                    id:"0",
                },
                {
                    t:"藝術家分享之夜",
                    img1:"./img/3-2.jpg",
                    set:"79% OFF",
                    d1:"活動亮點：3 月 18 日藝術家分享之夜即將來臨，了解當代藝術家馬克·奇拉的創作心得。",
                    price:200,
                    amount:0,
                    as:1,
                    id:"1",
                },
                {
                    t:"探索校園環境",
                    img1:"./img/3-3.jpg",
                    set:"77% OFF",
                    d1:"活動消息：3 月 20 日有浪人專屬的導覽活動，讓你一覽學城之美，探索我們與大自然共生的環境。",
                    price:100,
                    amount:0,
                    as:1,
                    id:"2",
                },
                {
                    t:"國際藝術大賽",
                    img1:"./img/3-4.jpg",
                    set:"88% OFF",
                    d1:"學校練習生在國際藝術大賽中脫穎而出，榮獲金獎，以優異的藝術創作在國際舞台上獲得高度肯定。",
                    price:100,
                    amount:0,
                    as:1,
                    id:"3",
                },
                {
                    t:"學術期刊藝術創作分享",
                    img1:"./img/3-5.jpg",
                    set:"50% OFF",
                    d1:"練習生透過學校的國際學術合作專案，有機會在國外學術期刊上分享對藝術創作的心得和經驗，促進跨文化的藝術交流。",
                    price:100,
                    amount:0,
                    as:1,
                    id:"4",
                },
                {
                    t:"國際藝術家邀約展覽",
                    img1:"./img/3-6.jpg",
                    set:"50% OFF",
                    d1:"學校藝術系練習生受邀由國際知名藝術家親自邀約參與展覽，展現出色的創作實力，成為國際藝術舞台上的亮點。",
                    price:600,
                    amount:0,
                    as:1,
                    id:"5",
                },
                {
                    t:"申請全額獎學金",
                    img1:"./img/3-7.jpg",
                    set:"快來申請",
                    d1:"學生透過參與學校的國際交流計畫，成功獲得國外大學提供的全額獎學金，為未來的留學之路鋪平了道路。",
                    price:0,
                    amount:0,
                    as:1,
                    id:"6",
                },
                {
                    t:"學術講座",
                    img1:"./img/3-1.jpg",
                    set:"88% OFF",
                    d1:"提醒已報名者：藝術Ｘ學術融合，3 月 15 日藝術史學者葛瑞絲·安德森博士將進行學術講座。",
                    price:100,
                    amount:0,
                    as:1,
                    id:"7",
                },
            ],
            sales:[
                {
                    img1:"./img/map1.png",
                    id:"0",
                },
                {
                    img1:"./img/map2.png",
                    id:"1",
                },
                {
                    img1:"./img/map3.png",
                    id:"2",
                },
                {
                    img1:"./img/map4.png",
                    id:"3",
                },
                {
                    img1:"./img/map5.png",
                    id:"4",
                },
                {
                    img1:"./img/map6.png",
                    id:"5",
                },
                {
                    img1:"./img/map7.png",
                    id:"6",
                },
                {
                    img1:"./img/map8.png",
                    id:"7",
                },
                {
                    img1:"./img/map9.png",
                    id:"8",
                },
                {
                    img1:"./img/map10.png",
                    id:"9",
                },
                {
                    img1:"./img/map11.png",
                    id:"10",
                },
                {
                    img1:"./img/map12.png",
                    id:"11",
                },
            ],
            photos:[
                {
                    t:"理念/校訓",
                    img1:"./img/5-1.jpg",
                    img2:"./img/5-2.jpg",
                    d1:"關於「讓仁藝術高級中學」創校理念：無即是有，論生態之美，還思維之自由。",
                    d2:"About the founding philosophy of 'Modesty Benevolent Art Experimental High School': Embracing the concept of 'nothing is something,' appreciating the beauty of ecology, and advocating the freedom of thought.",
                    id:"0",
                },
                {
                    t:"校園簡述",
                    img1:"./img/5-3.jpg",
                    img2:"./img/5-4.jpg",
                    d1:"坐落於台灣花蓮，「Modesty Benevolent Art Experimental High School 讓仁藝術實驗高級中學」是一所擁有獨特地理優勢的學城。距離海岸僅 2 公里，這片與大自然緊密共生的平地，凝聚了豐富的生態環境，成為世界矚目的地方。",
                    d2:"Nestled in Hualien, Taiwan, Modesty Benevolent Art Experimental High School is a school with unique geographical advantages. Just 2 kilometers from the coast, this land, closely intertwined with nature, gathers a rich ecological environment, making it a world-renowned destination.",
                    id:"1",
                },
                {
                    t:"環境建置",
                    img1:"./img/5-5.jpg",
                    img2:"./img/5-6.jpg",
                    d1:"與環境共融的人文：這片土地不僅孕育著多樣的生物，更造就了獨特的人文風情。在這裡，入學的練習生享有思考的自由，探索生態議題成為課堂的一部分。我們鼓勵真實的環保行為，不僅是理念，更是實踐；並不是培養學生的環保意識而是讓環保成為最基本的生活習慣。正所謂「藝高人膽大」我們深深知道那是對實踐的禮讚，印證才是思想的夥伴。",
                    d2:"This land not only nurtures diverse life forms but also shapes a unique cultural ambiance. Here, incoming students enjoy the freedom of thought, with exploring ecological issues being an integral part of their curriculum. We encourage authentic environmental conservation practices, not merely as an ideology but as a lived reality.Our aim is not just to cultivate environmental awareness in students but to make environmental stewardship a fundamental aspect of daily life. As the saying goes, 'In art, courage is abundant.' We deeply understand that courage is a tribute to practical action, affirming that action is the companion of thought.",
                    id:"2",
                },
                {
                    t:"關於課程",
                    img1:"./img/5-7.jpg",
                    img2:"./img/5-8.jpg",
                    d1:"「讓仁藝術實驗高中」的課程與眾不同，舉數學為例，我們擁有實際觀察金融股市的應用數學課，透過金融工具的觀察，應用數學課更是為數理概念賦予了實際、生動的面向，培養學生具備實際的金融視野；讓仁甚至也將數學連結建築學院的建築運算，讓與課的練習生實際操作。藝術是生命的養分，有別於臺灣其它學校過於平庸的教學方針，這裡不僅提倡競爭，如藝術部門多元涵蓋繪畫課、雕刻課、工藝練習課、設計操作課、建築操作科、先端藝術表現科、藝術探究學科等，獨特的課程設計旨在激發練習生的創作力。更重視練習生長時間進入藝術，體現多元化的特殊學習歷程。透過實際於國際市場展售的不同藝術家成立中短期專案教學，學生的藝術創造力得以充分展現，而安排街頭藝術家的短期專案講課，則培養了他們踏實的社會眼光。",
                    d2:"The courses at 'Modesty Benevolent Art Experimental High School' stand out from the rest. Taking mathematics as an example, we offer an applied mathematics class that involves practical observation of the financial stock market. Through the examination of financial instruments, this class breathes life into mathematical concepts, fostering in students a tangible and vividperspective on finance. Beyond that, we intertwine mathematics with architectural computation in our collaboration with the School of Architecture, allowing students hands-on experience.Art is the nourishment of life, and unlike the mundane teaching approaches of other schools in Taiwan, we not only encourage competition but also diversify our art department. From painting, sculpture, and craft practice to design operations, architectural operations, cutting-edge art expression, and art exploration, our unique course design aims to ignite the creative spark in our students. We prioritize a prolonged exposure to art for students, emphasizing a diverse and distinctive learning journey. Through real-world teaching projects led by internationally renowned artists, students have the opportunity to showcase their artistic creativity. Additionally, guest lectures by street artists contribute to cultivating a grounded societal perspective among them.",
                    id:"3",
                },
                {
                    t:"關於旅宿",
                    img1:"./img/5-9.jpg",
                    img2:"./img/5-10.jpg",
                    d1:"半開放型學習營宿：在花蓮地廣人稀的環境中，讓仁藝術高級中學提供了“半開放型的學習營宿”。這不是一個監獄般的緊閉「住宿建築」，而是一個鼓勵練習生自主學習、混齡交流發展的自由環境。家長與學校有一定的距離，建立了信任，減少了對學生的壓力，讓他們在自由中茁壯成長。",
                    d2:"Semi-Open Learning Camp Residence — Nestled in the expansive and sparsely populated landscape of Hualien, 'Modesty Benevolent Art Experimental High School' offers a 'semi-open learning camp residence.' This is not a confinement akin to a prison-like 'accommodationstructure' but rather a liberated environment that encourages students to engage in self-directed learning, cross-age interactions, and personal development. The intentional distance between parents and the school fosters trust, alleviating pressure on students and allowing them to flourish and grow amidst the freedom provided.",
                    id:"4",
                },
                {
                    t:"關於永續",
                    img1:"./img/5-11.jpg",
                    img2:"./img/5-12.jpg",
                    d1:"「讓仁高中」以其特有的生態之美、思維之自由和多元化課程，成為教育的翠綠綻放之地，培育著未來的世代領袖和勇於踏入新世界的創革者！我校戮力成就自我認知的讓仁，培力探索未知的不朽浪人！",
                    d2:"'Modesty Benevolent Art Experimental High School' embodies a sustainable spirit unique to our institution. With its distinctive blend of ecological beauty, intellectual freedom, and diversecurriculum.Our school stands as a verdant haven in education, cultivating future leaders and innovative trailblazers who fearlessly step into new realms. Our institution passionately strives to empower self-aware individuals, fostering the spirit of exploration in the pursuit of timeless adventures!",
                    id:"5",
                },
                {
                    t:"關於顧問",
                    img1:"./img/5-13.jpg",
                    img2:"./img/5-14.jpg",
                    d1:"擁有國際化的曠野之心，我們的外部教育顧問是席維斯·史特龍(Sylvester Stallone)，他以「永不放棄」的精神著稱。而這次的姐妹校聯合觀摩校慶活動，則是邀請草間彌生擔任視覺顧問。",
                    d2:"With an international spirit of innovation, our external education consultant is Sylvester Stallone, renowned for his 'Never Give Up' ethos. Furthermore, for this joint sister school observation of the school celebration event, we have invited Yayoi Kusama to serve as the visual consultant.",
                    id:"6",
                },
            ],
            votes:[
                {
                    img:"./img/6-1.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"0"
                },
                {
                    img:"./img/6-2.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"1"
                },
                {
                    img:"./img/6-3.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"2"
                },
                {
                    img:"./img/6-4.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"3"
                },
                {
                    img:"./img/6-5.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"4"
                },
                {
                    img:"./img/6-6.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"5"
                },
                {
                    img:"./img/6-7.jpg",
                    b1:"你的選擇",
                    amount:0,
                    as:1,
                    id:"6"
                },
            ],
            HP:3,
            FP:1,
            HP5:6,
            FP5:1,
            nnnewIndex:0,
            productIndex:0,
            saleIndex:0,
            photoIndex:0,
            voteIndex:0,
            doingIndex:0,
            maxVote:30,
        }
    },
    computed:{
        PS: function(){
            return (this.FP - 1) * this.HP
        },
        FR: function(){
            return this.nnnews
        },
        TP: function(){
            return Math.ceil(this.FR.length / this.HP)
        },
        PS5: function(){
            return (this.FP5 - 1) * this.HP5
        },
        FR5: function(){
            return this.photos
        },
        TP5: function(){
            return Math.ceil(this.FR5.length / this.HP5)
        },
        // 
        cart: function(){
            return this.products
        },
        productss: function(){
            return this.cart
                .filter(p => p.amount)
                .map(p => {
                    p.sum = p.price * p.amount
                    p.num = p.amount
                    return p
                })
        },
        num: function(){
            return this.productss
                .reduce((num,p) => (num + p.num), 0)
        },
        total: function(){
            return this.productss
                .reduce((sum,p) => (sum + p.sum), 0)
        },
        // 
        votess: function(){
            return this.votes
                .map(v => {
                    v.num = v.amount
                    return v
                })
        },
        numV: function(){
            return this.votess
                .reduce((num,v) => (num + v.num), 0)
        },
        // 
        nnnewss: function(){
            return this.nnnews[this.nnnewIndex]
        },
        product: function(){
            return this.products[this.productIndex]
        },
        sale: function(){
            return this.sales[this.saleIndex]
        },
        photoss: function(){
            return this.photos[this.photoIndex]
        },
        voteIndex: function(){
            return this.votes[this.voteIndex]
        },
        doing: function(){
            return this.doings[this.doingIndex]
        },
    },
    methods:{
        SP: function(idx){
            if (idx <= 0 || idx > this.TP){
                return
            }
            this.FP = idx
        },
        SP5: function(idx){
            if (idx <= 0 || idx > this.TP5){
                return
            }
            this.FP5 = idx
        },
        // 
        toCart: function(products){
            if(products.id > 4){
                this.products[products.id - 5].amount += products.as
            } else {
                products.amount += products.as
            }
        },
        minus: function(products){
            products.as = Math.max(products.as - 1, 1)
        },
        add: function(products){
            products.as = Math.min(products.as + 1, 9)
        },
        remove: function(products){
            products.amount = 0
        },
        // 
        calcWidth: function(numV){
            const total =(numV / this.maxVote) * 100
            return total
        },
        toVote: function(votes){
            votes.amount += votes.as
        }
    },
})
vm.mount("#app")