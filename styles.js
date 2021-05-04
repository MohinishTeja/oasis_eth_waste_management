
var abi = [{"constant":true,"inputs":[],"name":"balanceof","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"},{"internalType":"uint256","name":"category","type":"uint256"}],"name":"payout","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
var bytecode = '608060405234801561001057600080fd5b506101ec806100206000396000f3fe6080604052600436106100345760003560e01c80632980a5d314610039578063adf58c1514610064578063e8b5e51f146100c9575b600080fd5b34801561004557600080fd5b5061004e6100d3565b6040518082815260200191505060405180910390f35b34801561007057600080fd5b506100c76004803603606081101561008757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506100db565b005b6100d1610169565b005b600047905090565b600060018214156100ef576064905061011a565b60028214156101015760c89050610119565b60038214156101135760969050610118565b609690505b5b5b8373ffffffffffffffffffffffffffffffffffffffff166108fc8285029081150290604051600060405180830381858888f19350505050158015610162573d6000803e3d6000fd5b5050505050565b346000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555056fea265627a7a723158203739f72a8873186c57001a124f03e5a367688da5fed06cf841b5e8614d680c0d64736f6c63430005110032';
//var cAddr = '0xa4f7e278d18dc1a37a4f92a65af89999c8f3dfe2';
var cAddr='0x7d13942fD3A8c7c8DcB8448C25d4Af18fbB8a39E';

/* Don't modify */

var instance = null;
window.addEventListener('web3Ready', function() {
  var contract = web3.ss.contract(abi);
  instance = contract.at(cAddr);
});

document.querySelector("#s").addEventListener("click", function() {
  var n = window.prompt("Enter the number:");
  n && instance.set(n);
});
document.querySelector("#g").addEventListener("click", function() {
  instance.get(function(e,d) {
    console.log(d.toString());
    alert(d.toString());
  });
});



function pay1(){

	jQuery(document).ready(function($){
		//open popup
		$('.btn-signin').on('click', function(event){
			event.preventDefault();
			$('.cd-popup').addClass('is-visible');
		});
        
        var weight = document.getElementById("weight").value;
        var category = document.getElementById("category").value;

        var y=weight/10;
		document.getElementById("max").innerHTML="Total Carbon Captured-"+y+"kg "
		//close popup
		$('.cd-popup').on('click', function(event){
			if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
				event.preventDefault();
				$(this).removeClass('is-visible');
			}
		});
		//close popup when clicking the esc keyboard button
		$(document).keyup(function(event){
			if(event.which=='27'){
				$('.cd-popup').removeClass('is-visible');
			}
		});
	});

	
}
async function pay() {


        var paymentAddress = document.getElementById("address").value;
        var weight = document.getElementById("weight").value;
        var category = document.getElementById("category").value;

        instance.payout(paymentAddress,weight,category);

} 
