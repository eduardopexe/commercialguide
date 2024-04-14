#!/usr/bin/perl

#cnpj	matriz_filial	razao_social	nome_fantasia	situacao	data_situacao	motivo_situacao	nm_cidade_exterior	cod_pais	nome_pais	cod_nat_juridica	data_inicio_ativ	cnae_fiscal	tipo_logradouro	logradouro	numero	complemento	bairro	cep	uf	cod_municipio	municipio	ddd_1	telefone_1	ddd_2	telefone_2	ddd_fax	num_fax	email	qualif_resp	capital_social	porte	opc_simples	data_opc_simples	data_exc_simples	opc_mei	sit_especial


$tipo_serv="imoveis";

$mailing_origem1="mala_moveis";

$nome_campanha="prospect1";

$arq_open="/var/www/guia/mailing/santa_helena_de_goias.csv";

open(arq1,"$arq_open");

@mail=<arq1>;

close(arq1);

$ctx=0;
#$p=0;
%hcnpj=();

   foreach $it (@mail){

      $it=~s/\n//g;
      $it=~s/\r//g;
      $it=~s/\",\"/#;#/g;
      $it=~s/\"//g;
      $it=~s/\'/\\\'/g;
      $it=~s/\&/\\\&/g; 
      $lint=$it;
#      print "$lint \n";
      @dtx=split(/#;#/,$lint);

      $cnpj=$dtx[0];
      $matriz_filial=$dtx[1];
      $razao_social=$dtx[2];
      $nome_fantasia=$dtx[3];
	  
	  if (length($nome_fantasia)<1){
		  
		$nome_fantasia=$razao_social;  
	  }
	  
      $situacao_cnpj_rfb=$dtx[4];
      $data_situacao=$dtx[5];
      $motivo_situacao=$dtx[6];
      $nm_cidade_exterior=$dtx[7];
      $cod_pais=$dtx[8];
      $nome_pais=$dtx[9];
      $cod_nat_juridica=$dtx[10];
      $data_inicio_ativ=$dtx[11];
      $cnae_fiscal=$dtx[12];
      $tipo_logradouro=$dtx[13];
      $logradouro=$dtx[14];
      $numero_logradouro=$dtx[15];
      $obs_logradouro=$dtx[16];
      $bairro=$dtx[17];
      $cep=$dtx[18];
      $uf=$dtx[19];
      $cod_municipio=$dtx[20];
      $cidade=$dtx[21];
      $ddd_1=$dtx[22];
      $telefone_1=$dtx[23];
      $ddd_2=$dtx[24];
      $telefone_2=$dtx[25];
      $ddd_fax=$dtx[26];
      $num_fax=$dtx[27];
      $email_empresa=$dtx[28];
      $qualif_resp=$dtx[29];
      $capital_social=$dtx[30];
      $porte=$dtx[31];
      $opc_simples=$dtx[32];
      $data_opc_simples=$dtx[33];
      $data_exc_simples=$dtx[34];
      $opc_mei=$dtx[35];
      $sit_especial=$dtx[36];

###############################################

      if ($telefone_1=~/^(5|6|7|8|9)/){
		  
	     $telefone_1="9".$telefone_1;    	  
         $fone1=$ddd_1.$telefone_1;
		 $celular1=$ddd_1.$telefone_1;
		 $whatsapp=$ddd_1.$telefone_1;
	  }
	  else{
		  
		 #$telefone_1="9".$telefone_1;    	  
         $fone1=$ddd_1.$telefone_1;
		 $celular1="";  
		 $whatsapp="";
	  }
	  

   $nome_contato="naoconf";
   $email_contato="naoconf";
   $celular_contato="naoconf";
   $logo_empresa="naocon.jpg";
   $banner_promo="guiacomercial.jpg";
   $banner_ofertas="guiacomercial_ofertas.jpg";
   $alias="Guia GO";
   $plano="0";
   $valor_plano="0";
   $dia_vencimeto="0";
   $status_plano="0";
   $dia1_abertura1="seg-sex";
   $hora_abertura1="08:00";
   $hora_fechamento1="18:00";
   $dia1_abertura2="sab";
   $hora_abertura2="08:00";
   $hora_fechamento2="14:00";   
   $dia1_abertura3="dom";
   $hora_abertura3="fechado";
   $hora_fechamento3="fechado";     
   $data_inc="2020-07-31 18:00:00";
   
$sql="insert into cadastro_local ";
$sql.="(tipo_estabelecimento,nome_contato,email_contato,celular_contato,nome_fantasia,cnpj,";
$sql.="fone1,celular,whatsapp,facebook,instagram,website,latitude,longitude,logradouro,numero_logradouro,";
$sql.="obs_logradouro,cep,bairro,cidade,logo_empresa,banner_promo,banner_ofertas,alias,plano,valor_plano,";
$sql.="dia_vencimeto,status_plano,dia1_abertura1,dia2_abertura1,hora_abertura1,hora_fechamento1,dia1_abertura2,";
$sql.="dia2_abertura2,hora_abertura2,hora_fechamento2,dia1_abertura3,dia2_abertura3,hora_abertura3,";
$sql.="hora_fechamento3,data_inc,matriz_filial,razao_social,situacao_cnpj_rfb,data_situacao,motivo_situacao,";
$sql.="cod_nat_juridica,data_inicio_ativ,cnae_fiscal,tipo_logradouro,cod_municipio,ddd_1,ddd_2,telefone_2,";
$sql.="ddd_fax,num_fax,email_empresa,qualif_resp,capital_social,porte,opc_simples,data_opc_simples,";
$sql.="data_exc_simples,opc_mei,sit_especial)";
$sql.=" values ";
$sql.="('".$tipo_estabelecimento."','".$nome_contato."','".$email_contato."','".$celular_contato."','".$nome_fantasia."','".$cnpj."',";
$sql.="'".$fone1."','".$celular."','".$whatsapp."','".$facebook."','".$instagram."','".$website."','".$latitude."','".$longitude."','".$logradouro."','".$numero_logradouro."',";
$sql.="'".$obs_logradouro."','".$cep."','".$bairro."','".$cidade."','".$logo_empresa."','".$banner_promo."','".$banner_ofertas."','".$alias."','".$plano."','".$valor_plano."',";
$sql.="'".$dia_vencimeto."','".$status_plano."','".$dia1_abertura1."','".$dia2_abertura1."','".$hora_abertura1."','".$hora_fechamento1."','".$dia1_abertura2."',";
$sql.="'".$dia2_abertura2."','".$hora_abertura2."','".$hora_fechamento2."','".$dia1_abertura3."','".$dia2_abertura3."','".$hora_abertura3."',";
$sql.="'".$hora_fechamento3."','".$data_inc."','".$matriz_filial."','".$razao_social."','".$situacao_cnpj_rfb."','".$data_situacao."','".$motivo_situacao."',";
$sql.="'".$cod_nat_juridica."','".$data_inicio_ativ."','".$cnae_fiscal."','".$tipo_logradouro."','".$cod_municipio."','".$ddd_1."','".$ddd_2."','".$telefone_2."',";
$sql.="'".$ddd_fax."','".$num_fax."','".$email_empresa."','".$qualif_resp."','".$capital_social."','".$porte."','".$opc_simples."','".$data_opc_simples."',";
$sql.="'".$data_exc_simples."','".$opc_mei."','".$sit_especial."')";

if ($hcnpj{$cnpj} eq 'ok'){

#print "$cnpj - duplicaco \n";
}
else{

$hcnpj{$cnpj}="ok";
print $sql.";\n";

}
   }


exit

