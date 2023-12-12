function addItem() {
    var listItem = document.getElementById('listItem').value;

    if (listItem === '') {
        alert('할 일을 입력하세요!');
        return;
    }

    var ul = document.getElementById('todoList');
    var li = document.createElement('li');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(listItem));

    ul.appendChild(li);
    document.getElementById('listItem').value = '';

    // 추가된 부분: 체크박스 상태에 따라 스타일 변경
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through'; // 체크 표시가 되면 취소선 추가
        } else {
            li.style.textDecoration = 'none'; // 체크 해제되면 취소선 제거
        }
    });

    // 추가된 부분: 우클릭 시 리스트 삭제
    li.addEventListener('contextmenu', function (event) {
        event.preventDefault(); // 우클릭 메뉴 기본 동작 취소
        ul.removeChild(li);
    });
}

function handleListClick(event) {

}

function changeTheme() {
    var theme = document.getElementById('theme').value;
    document.body.className = theme;
    updateThemeStyle(theme);
}

function changeFont() {
    var font = document.getElementById('font').value;
    document.body.style.fontFamily = font;
}

function updateThemeStyle(theme) {
    var themeStyle = document.getElementById('themeStyle');
    themeStyle.href = 'styles/' + theme + '.css';
}
