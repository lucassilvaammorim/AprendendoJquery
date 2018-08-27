var addPropaganda = function()
{
    var propagandas = [ "propaganda 1",
                        "propaganda 2",
                        "propaganda 3",
                        "propaganda 4",
                        "propaganda 5"
    ];

    var posicao = Math.floor(propagandas.length*Math.random());
    var texto = propagandas[posicao];
    var tr = $("<tr>").addClass("propaganda").append($("<td>"));
    tr.find("td").attr("colspan", 6).text(texto);

    return tr;
}
var removeItem = function(event)
				{
                    event.preventDefault();
					var self = $(this);
                    //self.closest("tr").remove();
                    self.closest("tr").hide();
					calculaTotal();
					
                };
                var undo = function()
                {
                    var carrinho = $(this).closest(".carrinho");
                    carrinho.find("tr:visible").removeClass();
                    var trs = carrinho.find("tr:hidden").addClass("recuperado");
                    trs.show();
                    calculaTotal();
                };
			function calculaTotal()
			{
                var carrinhos = $(".carrinho");

                carrinhos.each(function() 
                {
                    var carrinho = $(this);
                    var itens = carrinho.find(".item-total:visible");
                    var total=0;
                    for(var i = 0;i < itens.length;i++)
                    {
                        var item = $(itens[i]);
                        var valor = item.text();
                        total += parseFloat(valor);
                    }
                    console.log("valor total: " + total);
                    carrinho.find(".valor-total").text(total);
                    carrinho.find(".itens-total").text(itens.length);
                });
				
            };

            $(calculaTotal);
            $(".carrinho").each(function(){
                $(this).find("tr:nth-child(3n), tr:last").each(function(){
                    addPropaganda().insertAfter($(this));
                });	
    

            });
                        $(".remove-item").click(removeItem);
            $(".desfazer").click(undo)
 