//测试JS文件       
Ext.onReady(function() {
	Ext.create('Ext.Panel', {
		renderTo : 'TestJs',
		height : 100,
		width : 200,
		title : 'Hello world',
		html : 'Test Js'
	});
});
//hello extjs
Ext.onReady(function() {
    Ext.create('Ext.Panel', {
    renderTo: 'helloWorldPanel',
    height: 100,
    width: 200,	
    title: 'Hello world',
    html: 'First Ext JS Hello World Program'
    });
 });

Ext.onReady(function() {
	 Ext.create('Ext.Panel', {
		renderTo:'helloWorld',
	    height: 100,
	    width: 200,
	    title: 'HelloWorld',
	    html:'Hello World',
	 });
});
//表格js
Ext.onReady(function(){  

    //定义列  

    var columns = [  

        {header:'编号',dataIndex:'id'},

        {header:'姓名',dataIndex:'name'},  

        {header:'备注',dataIndex:'descn'}  

      ];  

    //定义数据  

    var data =[  

        ['1','Helen','测试1'],  

        ['2','Tom','测试2'],  

        ['3','Lili','测试3']

    ];  

    //转换原始数据为EXT可以显示的数据  

    var store = new Ext.data.ArrayStore({  

        data:data,  

        fields:[  

           {name:'id'},   

           {name:'name'},  

           {name:'descn'}  

        ]  

    });  

    //加载数据  

    store.load();  

      

    //创建表格  

    var grid = new Ext.grid.GridPanel({  

        renderTo:'grid', //渲染位置  

        store:store, //转换后的数据  

        columns:columns, //显示列  

        stripeRows:true, //斑马线效果  

        width:500,

        forceFit:true //自动填满表格  

    });
});