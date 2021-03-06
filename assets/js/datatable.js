$(document).ready(function() {
    $('#announcementTable').DataTable({
        "searching": true,
        "ordering": false,
        "info": false,
        "pageLength": 10,
        "lengthChange": false,
        "language": {
            "processing": "處理中...",
            "loadingRecords": "載入中...",
            "lengthMenu": "每頁顯示 _MENU_ 項結果",
            "zeroRecords": "沒有符合的結果",
            "info": "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
            "infoEmpty": "顯示第 0 至 0 項結果，共 0 項",
            "infoFiltered": "(從 _MAX_ 項結果中過濾)",
            "infoPostFix": "",
            "search": "搜尋:",
            "paginate": {
                "first": "第一頁",
                "previous": "<",
                "next": ">",
                "last": "最後一頁"
            },
        }
    });
});
