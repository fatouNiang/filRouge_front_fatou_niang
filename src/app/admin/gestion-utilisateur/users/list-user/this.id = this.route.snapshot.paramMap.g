this.id = this.route.snapshot.paramMap.get('id'); // il permet recuperer la valeur de l'id
  this.profilservice.getProfilsById(this.id).subscribe(
  (data) => {
      this.profil = data;
      const libelle = document.getElementById('libelle');
      // @ts-ignore
      libelle.value = this.profil.libelle;
  });