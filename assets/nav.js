// ========== 章节数据 ==========
const chapters = [
    { id: 'preface', num: '', title: '开篇词 - 这样学Redis，才能技高一筹', file: 'preface.html', group: '开篇' },
    { id: 'ch01', num: '01', title: '基本架构：一个键值数据库包含什么？', file: '01.html', group: '基础篇' },
    { id: 'ch02', num: '02', title: '数据结构：快速的Redis有哪些慢操作？', file: '02.html', group: '基础篇' },
    { id: 'ch03', num: '03', title: '高性能IO模型：为什么单线程Redis能那么快？', file: '03.html', group: '基础篇' },
    { id: 'ch04', num: '04', title: 'AOF日志：宕机了，Redis如何避免数据丢失？', file: '04.html', group: '基础篇' },
    { id: 'ch05', num: '05', title: '内存快照：宕机后，Redis如何实现快速恢复？', file: '05.html', group: '基础篇' },
    { id: 'ch06', num: '06', title: '数据同步：主从库如何实现数据一致？', file: '06.html', group: '基础篇' },
    { id: 'ch07', num: '07', title: '哨兵机制：主库挂了，如何不间断服务？', file: '07.html', group: '基础篇' },
    { id: 'ch08', num: '08', title: '哨兵集群：哨兵挂了，主从库还能切换吗？', file: '08.html', group: '基础篇' },
    { id: 'ch09', num: '09', title: '切片集群：数据增多了，是该加内存还是加实例？', file: '09.html', group: '基础篇' },
    { id: 'ch10', num: '10', title: '第1～9讲课后思考题答案及常见问题答疑', file: '10.html', group: '基础篇' },
    { id: 'ch11', num: '11', title: '"万金油"的String，为什么不好用了？', file: '11.html', group: '实践篇' },
    { id: 'ch12', num: '12', title: '有一亿个keys要统计，应该用哪种集合？', file: '12.html', group: '实践篇' },
    { id: 'ch13', num: '13', title: 'GEO是什么？还可以定义新的数据类型吗？', file: '13.html', group: '实践篇' },
    { id: 'ch14', num: '14', title: '如何在Redis中保存时间序列数据？', file: '14.html', group: '实践篇' },
    { id: 'ch15', num: '15', title: '消息队列的考验：Redis有哪些解决方案？', file: '15.html', group: '实践篇' },
    { id: 'ch16', num: '16', title: '异步机制：如何避免单线程模型的阻塞？', file: '16.html', group: '实践篇' },
    { id: 'ch17', num: '17', title: '为什么CPU结构也会影响Redis的性能？', file: '17.html', group: '实践篇' },
    { id: 'ch18', num: '18', title: '波动的响应延迟：如何应对变慢的Redis？（上）', file: '18.html', group: '实践篇' },
    { id: 'ch19', num: '19', title: '波动的响应延迟：如何应对变慢的Redis？（下）', file: '19.html', group: '实践篇' },
    { id: 'ch20', num: '20', title: '删除数据后，为什么内存占用率还是很高？', file: '20.html', group: '实践篇' },
    { id: 'ch21', num: '21', title: '缓冲区：一个可能引发"惨案"的地方', file: '21.html', group: '实践篇' },
    { id: 'ch22', num: '22', title: '第11～21讲课后思考题答案及常见问题答疑', file: '22.html', group: '实践篇' },
    { id: 'ch23', num: '23', title: '旁路缓存：Redis是如何工作的？', file: '23.html', group: '缓存篇' },
    { id: 'ch24', num: '24', title: '替换策略：缓存满了怎么办？', file: '24.html', group: '缓存篇' },
    { id: 'ch25', num: '25', title: '缓存异常（上）：如何解决缓存和数据库的数据不一致问题？', file: '25.html', group: '缓存篇' },
    { id: 'ch26', num: '26', title: '缓存异常（下）：如何解决缓存雪崩、击穿、穿透难题？', file: '26.html', group: '缓存篇' },
    { id: 'ch27', num: '27', title: '缓存被污染了，该怎么办？', file: '27.html', group: '缓存篇' },
    { id: 'ch28', num: '28', title: 'Pika：如何基于SSD实现大容量Redis？', file: '28.html', group: '缓存篇' },
    { id: 'ch29', num: '29', title: '无锁的原子操作：Redis如何应对并发访问？', file: '29.html', group: '高级篇' },
    { id: 'ch30', num: '30', title: '如何使用Redis实现分布式锁？', file: '30.html', group: '高级篇' },
    { id: 'ch31', num: '31', title: '事务机制：Redis能实现ACID属性吗？', file: '31.html', group: '高级篇' },
    { id: 'ch32', num: '32', title: 'Redis主从同步与故障切换，有哪些坑？', file: '32.html', group: '高级篇' },
    { id: 'ch33', num: '33', title: '脑裂：一次奇怪的数据丢失', file: '33.html', group: '高级篇' },
    { id: 'ch34', num: '34', title: '第23~33讲课后思考题答案及常见问题答疑', file: '34.html', group: '高级篇' },
    { id: 'ch35', num: '35', title: 'Codis VS Redis Cluster：我该选择哪一个集群方案？', file: '35.html', group: '进阶篇' },
    { id: 'ch36', num: '36', title: 'Redis支撑秒杀场景的关键技术和实践都有哪些？', file: '36.html', group: '进阶篇' },
    { id: 'ch37', num: '37', title: '数据分布优化：如何应对数据倾斜？', file: '37.html', group: '进阶篇' },
    { id: 'ch38', num: '38', title: '通信开销：限制Redis Cluster规模的关键因素', file: '38.html', group: '进阶篇' },
    { id: 'ch39', num: '39', title: 'Redis 6.0的新特性：多线程、客户端缓存与安全', file: '39.html', group: '进阶篇' },
    { id: 'ch40', num: '40', title: 'Redis的下一步：基于NVM内存的实践', file: '40.html', group: '进阶篇' },
    { id: 'ch41', num: '41', title: '第35～40讲课后思考题答案及常见问题答疑', file: '41.html', group: '进阶篇' },
    { id: 'midtest', num: '', title: '期中测试题', file: 'midtest.html', group: '测试' },
    { id: 'midanswer', num: '', title: '期中测试题答案', file: 'midanswer.html', group: '测试' },
    { id: 'finaltest', num: '', title: '期末测试', file: 'finaltest.html', group: '测试' },
    { id: 'bonus01', num: '', title: '加餐（一）经典的Redis学习资料有哪些？', file: 'bonus01.html', group: '加餐' },
    { id: 'bonus02', num: '', title: '加餐（二）用户Kaito：我是如何学习Redis的？', file: 'bonus02.html', group: '加餐' },
    { id: 'bonus03', num: '', title: '加餐（三）用户Kaito：我希望成为在压力中成长的人', file: 'bonus03.html', group: '加餐' },
    { id: 'bonus04', num: '', title: '加餐（四）Redis客户端如何与服务器端交换命令和数据？', file: 'bonus04.html', group: '加餐' },
    { id: 'bonus05', num: '', title: '加餐（五）Redis有哪些好用的运维工具？', file: 'bonus05.html', group: '加餐' },
    { id: 'bonus06', num: '', title: '加餐（六）Redis的使用规范小建议', file: 'bonus06.html', group: '加餐' },
    { id: 'bonus07', num: '', title: '加餐（七）从微博的Redis实践中，我们可以学到哪些经验？', file: 'bonus07.html', group: '加餐' },
    { id: 'supplement', num: '', title: 'Java面试Redis查漏补缺', file: 'supplement.html', group: '加餐' },
    { id: 'ending', num: '', title: '结束语 - 从学习Redis到向Redis学习', file: 'ending.html', group: '结束' },
];

// 判断是否在 pages 子目录
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) return '../';
    return './';
}

function getPagesPath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) return './';
    return './pages/';
}

// 获取当前页面对应的章节
function getCurrentChapter() {
    const path = window.location.pathname;
    const filename = path.split('/').pop();
    return chapters.find(c => c.file === filename) || null;
}

// 获取前后章节
function getAdjacentChapters(current) {
    if (!current) return { prev: null, next: null };
    const idx = chapters.findIndex(c => c.id === current.id);
    return {
        prev: idx > 0 ? chapters[idx - 1] : null,
        next: idx < chapters.length - 1 ? chapters[idx + 1] : null
    };
}

// 渲染侧边栏
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const base = getBasePath();
    const pagesPath = getPagesPath();
    const current = getCurrentChapter();

    let html = `
        <div class="sidebar-header">
            <h2>Redis核心技术与实战</h2>
            <a href="${base}index.html" class="home-link">📚 返回首页</a>
        </div>
        <nav class="sidebar-nav">
    `;

    let lastGroup = '';
    chapters.forEach(ch => {
        if (ch.group !== lastGroup) {
            lastGroup = ch.group;
            html += `<div class="nav-group-title">${ch.group}</div>`;
        }
        const isActive = current && current.id === ch.id ? ' active' : '';
        const numSpan = ch.num ? `<span class="nav-num">${ch.num}</span>` : '';
        html += `<a class="nav-item${isActive}" href="${pagesPath}${ch.file}">${numSpan}${ch.num ? ch.title : ch.title}</a>`;
    });

    html += '</nav>';
    sidebar.innerHTML = html;
}

// 渲染底部导航
function renderPageNav() {
    const navEl = document.getElementById('pageNav');
    if (!navEl) return;

    const current = getCurrentChapter();
    const { prev, next } = getAdjacentChapters(current);
    const pagesPath = getPagesPath();

    let html = '';
    if (prev) {
        html += `<a href="${pagesPath}${prev.file}" class="prev-arrow">${prev.num ? prev.num + ' - ' : ''}${prev.title}</a>`;
    } else {
        html += '<span></span>';
    }
    if (next) {
        html += `<a href="${pagesPath}${next.file}" class="next-arrow">${next.num ? next.num + ' - ' : ''}${next.title}</a>`;
    } else {
        html += '<span></span>';
    }
    navEl.innerHTML = html;
}

// 移动端侧边栏切换
function initMobileNav() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (overlay) overlay.classList.toggle('show');
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.classList.remove('show');
        });
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderSidebar();
    renderPageNav();
    initMobileNav();
});
