// 各分类的图片数据
const landscapeImages = [
    "images/1.jpg", "images/2.jpg", "images/3.jpg", 
    "images/4.jpg", "images/5.jpg", "images/6.jpg",
    "images/7.jpg", "images/8.jpg", "images/9.jpg"
];

const personImages = [
    "images/10.jpg", "images/11.jpg", "images/12.jpg", 
    "images/13.jpg"
];

const otherImages = [
    "images/14.jpg", "images/15.jpg", "images/16.jpg", 
    "images/17.jpg", "images/18.jpg", "images/19.jpg",
    "images/20.jpg", "images/21.jpg"
];

// 分页设置
const imagesPerPage = 8; // 每页显示8张图片
let landscapePage = 1; 
let personPage = 1; 
let otherPage = 1;

// 渲染图片函数
function renderGallery(category, images, page, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // 清空当前内容

    // 计算分页数据
    const startIndex = (page - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const imagesToShow = images.slice(startIndex, endIndex);

    // 动态生成图片
    imagesToShow.forEach((src, index) => {
        const imgElement = `
            <div class="image-item">
                <img src="${src}" alt="${category}${startIndex + index + 1}">
            </div>`;
        container.innerHTML += imgElement;
    });
}

// 初始化分类的图片展示
renderGallery('风景', landscapeImages, landscapePage, 'landscape-container');
renderGallery('人物', personImages, personPage, 'person-container');
renderGallery('其他', otherImages, otherPage, 'other-container');

// 添加分页事件
document.getElementById('landscape-prev').addEventListener('click', () => {
    if (landscapePage > 1) {
        landscapePage--;
        renderGallery('风景', landscapeImages, landscapePage, 'landscape-container');
    }
});

document.getElementById('landscape-next').addEventListener('click', () => {
    if (landscapePage * imagesPerPage < landscapeImages.length) {
        landscapePage++;
        renderGallery('风景', landscapeImages, landscapePage, 'landscape-container');
    }
});

document.getElementById('person-prev').addEventListener('click', () => {
    if (personPage > 1) {
        personPage--;
        renderGallery('人物', personImages, personPage, 'person-container');
    }
});

document.getElementById('person-next').addEventListener('click', () => {
    if (personPage * imagesPerPage < personImages.length) {
        personPage++;
        renderGallery('人物', personImages, personPage, 'person-container');
    }
});

document.getElementById('other-prev').addEventListener('click', () => {
    if (otherPage > 1) {
        otherPage--;
        renderGallery('其他', otherImages, otherPage, 'other-container');
    }
});

document.getElementById('other-next').addEventListener('click', () => {
    if (otherPage * imagesPerPage < otherImages.length) {
        otherPage++;
        renderGallery('其他', otherImages, otherPage, 'other-container');
    }
});

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = `${Math.random() * 100}vw`; // 随机水平位置
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 随机下落速度
    document.body.appendChild(snowflake);

    // 移除雪花，防止内存泄漏
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// 每隔 300 毫秒生成一个雪花
setInterval(createSnowflake, 300);

