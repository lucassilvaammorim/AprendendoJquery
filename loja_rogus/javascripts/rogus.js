
		//codigos comentados representam as mesmas funcionalidades, porém sem uso do framework jquery
		
		function calculaTotal()
		{
			var totalProdutos = 0;
			var produtos = $(".produto");

			$(produtos).each(function(pos, produto)
			//for(var pos = 0; pos < produtos.length; pos++)
			{
				//var produto = $(produtos[pos]);
				var produto = $(produtos);
				var valor = textMoneyToFloat($(produto).find(".price").text()); 

				/*var valorProduto = produtos[pos].getElementsByClassName("price");
				var valorText = valorProduto[0].innerHTML;
				var valorFinal = textMoneyToFloat(valorText);*/
				
				var quantidade = parseInt($(produto).find(".quantity").val());
				/*var qtdProduto = produtos[pos].getElementsByClassName("quantity");
				var qtdText = qtdProduto[0].value;
				var qtdFinal = parseInt(qtdText);*/

				totalProdutos += valor*quantidade;
			});

			return totalProdutos;
		}
		function onDocumentLoad()
		{
			$(".quantity").change(function(){
				writeTotal(calculaTotal());
			});

			/*var editados = document.getElementsByClassName("quantity");

			for (var i = 0; i < editados.length; i++)
			{
				editados[i].onchange = quantidadeMudou;
			}*/
		}
		/*function quantidadeMudou()
		{
			var total = calculaTotal();
			writeTotal(total);
		}*/
		function textMoneyToFloat(texto)
		{
			var clearText = texto.replace("R$ ", "").replace(",", ".");
			return parseFloat(clearText);
		}
		function floatToMoneyText(value) 
		{
			var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
			text = "R$ " + text;
			return text.substr(0, text.length - 2) + "," + text.substr(-2);
		}
		function readTotal()
		{
			var total = $("#total").text();
			return textMoneyToFloat(total.innerHTML);
		}
		function writeTotal(value)
		{
			var total = floatToMoneyText(value);
			$("#total").text(total);
		}
		window.onload = onDocumentLoad;