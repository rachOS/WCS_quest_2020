<!-- Récupère tous les champs pour les sorciers nés entre 1975 et 1985 -->
```SQL
SELECT * FROM wizard;
```
+----+-----------+------------+------------+-------------+-------------------------------------------------------------+-----------+
| id | firstname | lastname   | birthday   | birth_place | biography                                                   | is_muggle |
+----+-----------+------------+------------+-------------+-------------------------------------------------------------+-----------+
|  1 | harry     | potter     | 1980-07-31 | london      |                                                             |         0 |
|  2 | hermione  | granger    | 1979-09-19 |             | Friend of Harry Potter                                      |         0 |
|  3 | lily      | potter     | 1960-01-30 |             | mother of Harry Potter                                      |         0 |
|  4 | ron       | weasley    | 1980-03-01 |             | Best friend of Harry                                        |         0 |
|  5 | ginny     | weasley    | 1981-08-11 |             | Sister of Ron and girlfriend of Harry                       |         0 |
|  6 | fred      | weasley    | 1978-04-01 |             |                                                             |         0 |
|  7 | george    | weasley    | 1978-04-01 |             |                                                             |         0 |
|  8 | arthur    | weasley    | 1950-02-06 |             |                                                             |         0 |
|  9 | molly     | weasley    | 1949-01-01 |             |                                                             |         0 |
| 10 | drago     | malefoy    | 1980-06-05 |             |                                                             |         0 |
| 11 | albus     | dumbledore | 1881-07-01 |             |                                                             |         0 |
| 12 | severus   | rogue      | 1960-01-09 |             |                                                             |         0 |
| 13 | tom       | jédusor    | 1926-12-31 |             | Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom alias Voldermort |         0 |
| 14 | dudley    | dursley    | 1980-06-23 |             | Cousin d&apos;Harry                                              |         1 |
+----+-----------+------------+------------+-------------+-------------------------------------------------------------+-----------+
<b>14 rows in set (0.000 sec)</b>
</pre>

<!-- Le prénom uniquement des sorciers dont le prénom commence par la lettre ‘H’ -->
<pre>MariaDB [wild_db_quest]&gt; SELECT *
    -&gt; FROM wizard
    -&gt; WHERE firstname
    -&gt; LIKE &apos;h%&apos;;
+----+-----------+----------+------------+-------------+------------------------+-----------+
| id | firstname | lastname | birthday   | birth_place | biography              | is_muggle |
+----+-----------+----------+------------+-------------+------------------------+-----------+
|  1 | harry     | potter   | 1980-07-31 | london      |                        |         0 |
|  2 | hermione  | granger  | 1979-09-19 |             | Friend of Harry Potter |         0 |
+----+-----------+----------+------------+-------------+------------------------+-----------+
<b>2 rows in set (0.000 sec)</b>
</pre>


<!-- Les prénom et nom de tous les membres de la famille ‘Potter’, classés par ordre de prénom -->
<pre>MariaDB [wild_db_quest]&gt; SELECT firstname, lastname
    -&gt; FROM wizard
    -&gt; WHERE lastname
    -&gt; LIKE &apos;Potter&apos;
    -&gt; ORDER by firstname;
+-----------+----------+
| firstname | lastname |
+-----------+----------+
| harry     | potter   |
| lily      | potter   |
+-----------+----------+
<b>2 rows in set (0.024 sec)</b>
</pre>


<!-- Le prénom, nom et date de naissance du plus vieux sorcier (doit fonctionner quelque soit le contenu de la table) -->
<pre>MariaDB [wild_db_quest]&gt; SELECT firstname,lastname, birthday
    -&gt; FROM wizard
    -&gt; ORDER BY birthday
    -&gt; LIMIT 1;
+-----------+------------+------------+
| firstname | lastname   | birthday   |
+-----------+------------+------------+
| albus     | dumbledore | 1881-07-01 |
+-----------+------------+------------+
<b>1 row in set (0.000 sec)</b>
</pre>

<pre>MariaDB [wild_db_quest]&gt; SELECT * FROM wizard WHERE birthday BETWEEN &apos;1975-01-01&apos; AND &apos;1985-12-31&apos; ORDER BY birthday;
+----+-----------+----------+------------+-------------+---------------------------------------+-----------+
| id | firstname | lastname | birthday   | birth_place | biography                             | is_muggle |
+----+-----------+----------+------------+-------------+---------------------------------------+-----------+
|  6 | fred      | weasley  | 1978-04-01 |             |                                       |         0 |
|  7 | george    | weasley  | 1978-04-01 |             |                                       |         0 |
|  2 | hermione  | granger  | 1979-09-19 |             | Friend of Harry Potter                |         0 |
|  4 | ron       | weasley  | 1980-03-01 |             | Best friend of Harry                  |         0 |
| 10 | drago     | malefoy  | 1980-06-05 |             |                                       |         0 |
| 14 | dudley    | dursley  | 1980-06-23 |             | Cousin d&apos;Harry                        |         1 |
|  1 | harry     | potter   | 1980-07-31 | london      |                                       |         0 |
|  5 | ginny     | weasley  | 1981-08-11 |             | Sister of Ron and girlfriend of Harry |         0 |
+----+-----------+----------+------------+-------------+---------------------------------------+-----------+
<b>8 rows in set (0.001 sec)</b>
</pre>
