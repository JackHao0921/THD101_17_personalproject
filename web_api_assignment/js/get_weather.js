$(function () {
    $.ajax({
        // 發送GET請求到指定的URL
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-015?Authorization=CWB-633DF837-140F-4F5A-AA67-854A8CD1E89F&locationName=%E8%8B%91%E8%A3%A1%E9%8E%AE&elementName=T',
        type: "GET",
        dataType: "json",
        success: function (resource) {
            // 印出來源資料
            console.log(resource);
            // 套用資料的縣市名稱
            $('#city_name').html(resource.records.locations[0].locationsName);
            // 套用資料的鄉鎮區名稱
            $('#district').html(resource.records.locations[0].location[0].locationName);
            // 套用資料的當天平均溫度
            $('#temperature').html(resource.records.locations[0].location[0].weatherElement[0].time[0].elementValue[0].value + "&#176;")

            // 使用迴圈套入當周日期的溫度
            let weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            let j = 0;
            for (let i = 0; i < 10; i++) {
                // 如果i是偶數，處理溫度和日期
                if ((i % 2) == 0) {
                    // 提取溫度值
                    let T = resource.records.locations[0].location[0].weatherElement[0].time[i].elementValue[0].value;
                    // 溫度的HTML字符串
                    let temperature = `<strong>${T}&#176;</strong>`;
                    // 提取日期
                    let wd = resource.records.locations[0].location[0].weatherElement[0].time[i].startTime;

                    // 創建日期對象
                    const d = new Date(wd);
                    // 提取星期幾的索引
                    let day_index = d.getDay();
                    // 將溫度和日期應用到對應的元素中
                    $('.block').eq(j).find('h6').html(temperature);
                    $('.block').eq(j).find('small').html(weekday[day_index]);
                    j++;
                }
            };
        },
        error: function (error) {
            // 打印錯誤信息
            console.log(error);
        }
    })
})