const quizArr = [
    {
        question: 'Javascript giúp bạn làm gì?',
        a: 'Chế tạo ô tô',
        b: 'Tạo hiệu ứng, kiểm tra dữ liệu đăng nhập, làm game',
        c: 'Hack FBI',
        d: 'Cả 3 đáp án trên',
        correct: 'b'
    },

    {
        question: 'Lệnh setTimeout giúp bạn làm gì',
        a: 'In trang web',
        b: 'Lưu trang web',
        c: 'Thực hiện công việc sau một khoảng thời gian chỉ định',
        d: 'Thực hiện lặp lại công việc sau một khoảng thời gian chỉ định',
        correct: 'c'
    },

    {
        question: 'Viết lệnh cần thiết để đổi chữ thành màu đỏ cho tất cả tag p trong trang',
        a: 'const p = document.getElementByTagId("p");<br>&nbsp;&nbsp;&nbsp;&nbsp;for(let i of p) {i.style.color="red";}',
        b: 'const p = document.getElementsByTagName("p");<br>&nbsp;&nbsp;&nbsp;&nbsp; for(let i of p) {i.style.color="red";}',
        c: 'Cả A và B',
        d: 'Khó quá bỏ qua',
        correct: 'b'
    },

    {
        question: 'Lệnh để hiện chữ "Bé giỏi quá" vào tag có id là kq',
        a: 'document.getElementById("kq").innerText = "Bé giỏi quá";',
        b: 'document.getElementById("kq").style = "Bé giỏi quá";',
        c: 'document.querySelector("kq").style = "Bé giỏi quá";',
        d: 'Cả A và C',
        correct: 'a'
    },

    {
        question: 'Thư viện Angular giúp gì cho bạn',
        a: 'Giúp bạn trở thành idol trong mắt mọi người',
        b: 'Giúp bạn code JavaScript dễ dàng hơn, nhất là các trang web cần tính toán và các nghiệp vụ phức tạp',
        c: 'Giúp bạn trở thành Senior Developer',
        d: 'Cả 3 đáp án trên',
        correct: 'b'
    },

    {
        question: 'Ngoài thư viện Angular có thư viện nào khác không',
        a: 'MySQL, OpenCV, Vim',
        b: 'Java, C, C#, C++',
        c: 'HTML, CSS, Kotlin',
        d: 'ReactJS, VueJS, Ember.js, Backbone.js, ...',
        correct: 'd'
    }
]

const quiz = document.getElementById('quiz');
const arr_answer = document.getElementsByClassName('answer');
const question_header = document.getElementById('question');
const a_answer = document.getElementById('a_answer');
const b_answer = document.getElementById('b_answer');
const c_answer = document.getElementById('c_answer');
const d_answer = document.getElementById('d_answer');

const submit = document.getElementById('submit');

const page = document.getElementById('page');

let current = 0;
let mark = 0;

loadQuiz();
// gán giá trị trong mang
function loadQuiz() {
    cancelUnchecked();
    const quizData = quizArr[current];

    question_header.innerText = quizData.question
    a_answer.innerHTML = quizData.a
    b_answer.innerHTML = quizData.b
    c_answer.innerHTML = quizData.c
    d_answer.innerHTML = quizData.d

    page.innerText = `${current+1}/${quizArr.length}`
}

// sau mỗi lần click submit
// để chạy lại hàm loadQuiz() thì huỷ check trc đó
function cancelUnchecked() {
    for (let i of arr_answer) {
        i.checked = false;
    }

}

// trả về id khi click đáp án
function getSelected() {
    let answer;
    for (let i of arr_answer) {
        if (i.checked) {
            answer = i.id;
        }
    }
    return answer;
}

//
function getResult() {
    const result = getSelected();
    // nếu đã click thì mới dc ấn submit
    if (result) {
        if (result === quizArr[current].correct) {
            mark++; // đúng thì tăng lên 1đ
        }

        current++;
        // tăng curret tới khi vượt quá độ dài mảng 
        // thì trả về thông báo và nút reload lại trang
        if(current < quizArr.length) { 
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2 align="center">Bạn đã trả lời chính xác ${mark}/${quizArr.length} câu hỏi</h2>
            <button onclick="location.reload()">Quay lại</button>`
            quiz.style.height = '200px';
        }
    }
}
