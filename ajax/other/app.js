const toCapitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

$('#fetchData').on('click', function () {
    $('.loader').removeClass('inactive');// Met l'icone de chargement

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`,
        method: 'GET',
        dataType: 'json', // Type de données attendu en réponse
        success: function (data) {
            let htmlContent = '';
            // Affichage des résultats 
            $.each(data.results, (index, pkmData) => $.ajax({
                url: pkmData.url,
                method: 'GET',
                dataType: 'json', // Type de données attendu en réponse
                success: function (data) {
                    const imgUrl = data.sprites.other['official-artwork']['front_default'];
                    
                    htmlContent += `<div><p>N°${index+1} ${toCapitalize(data.name)}</p><img src="${imgUrl}" width="64"></div>`;
                    
                    $('.loader').addClass('inactive');// Enleve l'icone de chargement
                    $('#result').html(htmlContent);
                },
                error: function () {
                    $('.loader').addClass('inactive');// Enleve l'icone de chargement
                    $('#result').html('Erreur lors du chargement des données.');
                }
            }));

        },
        error: function () {
            $('.loader').addClass('inactive');// Enleve l'icone de chargement
            $('#result').html('Erreur lors du chargement des données.');
        }
    });
});
// htmlContent += `<p>N°${index} ${toCapitalize(pkmData.name)}</p>`