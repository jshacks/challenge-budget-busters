$(function() {
    var data = {
        key: "Some key",
        hash: "1234",
        sub: [{
            key: "Subkey 1",
            descr: "Subkey 1 description here",
            hash: "2345",
            sub: [],
            value: 2000
        }, {
            key: "Subkey 2",
            descr: "Subkey 2 description here",
            hash: "7890",
            sub: [{
                key: "Sub-subkey 1",
                descr: "Sub-subkey 1 description here",
                hash: "3456",
                sub: [],
                value: 3000
            }, {
                key: "Sub-subkey 2",
                descr: "Sub-subkey 2 description here",
                hash: "4567",
                sub: [{
                    key: "Sub-sub-subkey 1",
                    descr: "Sub-sub-subkey 1 description here",
                    hash: "5678",
                    sub: [],
                    value: 2500
                }, {
                    key: "Sub-sub-subkey 2",
                    descr: "Sub-sub-subkey 2 description here",
                    hash: "6789",
                    sub: [],
                    value: 2500
                }],
                value: 5000
            }],
            value: 8000
        }],
        value: 10000
    };

    avb.root = data;

    avb.treemap.initialize($('#treemap'), data);
});
