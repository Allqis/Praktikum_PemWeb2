<html>
<head>
	<title>Program BMI</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div>
	<table>
		<thead>
			<tr>
				<th>Program BMI</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Masukan tinggi badan (cm)</td>
			</tr>
			<tr>
				<td><input type="text" id="ipt_t"></td>
			</tr>
			<tr>
				<td>Masukan berat badan (kg)</td>
			</tr>
			<tr>
				<td><input type="text" id="ipt_b"></td>
			</tr>
			<tr>
				<td><button onclick="hitung()">Hitung</button></td>
			</tr>
		</tbody>
		<tfoot>
			<tr>
				<td id="bmi">Hasil perhitungan BMI :</td>
			</tr>
			<tr>
				<td>Keterangan :</td>
			</tr>
			<tr>
				<td id="keterangan"></td>
			</tr>			
		</tfoot>
	</table>
</div>
<script type="text/javascript" src="programBMI.js"></script>
</body>
</html>