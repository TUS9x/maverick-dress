let product = [];
$(function () {
    myUrl = "https://645b91baa8f9e4d6e76c3740.mockapi.io/producDoAn/"
    $.ajax({
        type: 'GET',
        url: myUrl,
        success: function (data) {
            $.each(data, function (k, v) {
                product.push(v)
            })
            loadData(product);
        }
    })
    // su kien onkey
    $(document).keyup(function (e) {
        if ($('#search_input:focus') && (e.key === 'Enter')) {
            search_all()
        } else {
            search_by_name()
        }
    });
    $('.data-cart').click(function () {
        alert('ok')
    })
    // Su kien click
    $('#search-button').click(search_all)
    //su kien click--loc theo name
    $('#section-search-recomend').click(function () {
        var query = $('#search_input').val().toLowerCase();
        product_timkiem = timkiem(product, query)
        loadData(product_timkiem);
        let a = document.querySelectorAll('.section-search p a');
        a.forEach(b => b.classList.remove('section-search-select'))
        console.log(a.classList)
        document.getElementById('section-search-recomend').classList.add('section-search-select')
    })
    $('#section-search--span__sort-by-name').click(function () {
        var query = $('#search_input').val().toLowerCase();
        product_timkiem = timkiem(product, query)
        product_timkiem.sort(sortByName);
        loadData(product_timkiem);
        let a = document.querySelectorAll('.section-search p a');
        a.forEach(b => b.classList.remove('section-search-select'))
        console.log(a.classList)
        this.classList.add('section-search-select')
    })
    $('#section-search--span__soft-low-to-hight').click(function () {
        var query = $('#search_input').val().toLowerCase();
        product_timkiem = timkiem(product, query)
        product_timkiem.sort(sortByValueIncrease);
        loadData(product_timkiem);
        let a = document.querySelectorAll('.section-search p a');
        a.forEach(b => b.classList.remove('section-search-select'))
        this.classList.add('section-search-select')
    })
    $('#section-search--span__soft-hight-to-low').click(function () {
        var query = $('#search_input').val().toLowerCase();
        product_timkiem = timkiem(product, query)
        product_timkiem.sort(sortByValueDecrease);
        loadData(product_timkiem);
        let a = document.querySelectorAll('.section-search p a');
        a.forEach(b => b.classList.remove('section-search-select'))
        this.classList.add('section-search-select')
    })

    //admin
    $('button.login').click(function () {
        if ($('#formEmail').val() == 'maverick@gmail.com' && $('#formPassword').val() == '123456') {
            alert('Đăng nhập thành công')
            localStorage.setItem('admin', $('#email').val())
            window.location = 'loginIndex.html'
        } else {
            alert('Thông tin đăng nhập không đúng')
        }
    })
})
