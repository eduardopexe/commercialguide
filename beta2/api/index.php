<?php

$tipo_form="inc";
$dblogin="root";
$dbpass="1910";
$dbname="guia";
#ip servidor banco de dados:
#$ipbd="104.237.3.123";
$ipbd="localhost";

#######db select

#base de dados
$db_server=$ipbd;
$db_login=$dblogin;
$db_pass=$dbpass;
$db_name=$dbname;


##########


// Creating connection
	$conn = new mysqli($db_server, $db_login, $db_pass, $db_name);
 
if ($conn->connect_error) {
 
	die("Connection failed: " . $conn->connect_error);
} 
 
	// Creating SQL command to fetch all records from Student_Data Table.
$tabela="cadastro_local";

$sql="select id,tipo_estabelecimento,nome_fantasia,fone1,celular,whatsapp,facebook,instagram,website,logo_empresa,banner_promo,banner_ofertas from $tabela order by id limit 5000";

#echo " $sql <br>";
	 
	$result = $conn->query($sql);
 
if ($result->num_rows >0) {
 
	 while($row[] = $result->fetch_assoc()) {

	 $item = $row;

       ##  echo "<br>"; 

         #$item=$linha;
	 $json = json_encode($item, JSON_NUMERIC_CHECK);
 }
 
} else {
	echo "No Data Found.";
}

echo $json;
$conn->close();

?>
