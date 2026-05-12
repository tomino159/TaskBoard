List<Projekt> projekty = new List<Projekt>();
bool online = true;

while (online)
{
    Console.WriteLine("===== TASKBOARD MENU =====");
    Console.WriteLine("1 - Vytvorit projekt");
    Console.WriteLine("2 - Pridat ulohu do projektu");
    Console.WriteLine("3 - Oznacit ulohu ako dokoncenu");
    Console.WriteLine("4 - Vypisat vsetky projekty a ulohy");
    Console.WriteLine("5 - Ulozit do suboru");
    Console.WriteLine("6 - Nacitat zo suboru");
    Console.WriteLine("7 - Ukoncit");
    Console.Write("Zadaj volbu: ");

    int volba = Convert.ToInt32(Console.ReadLine());
    if (volba == 1)
    {
        // TODO: vytvorit projekt
        Console.WriteLine("Zadaj nazov projektu:");
        string vstup = Console.ReadLine();
        Projekt novyProjekt = new Projekt(vstup);
        projekty.Add(novyProjekt);
    }
    else if (volba == 2)
    {
        // TODO: pridat ulohu
        Console.WriteLine("Vyber projekt pre novu ulohu:");
        for(int i = 0; i < projekty.Count; i++)
        {
            Console.WriteLine($"{i+1} - Projekt: {projekty[i].Nazov}");
        }
        int vstup = Convert.ToInt32(Console.ReadLine());
        Projekt vybranyProjekt = projekty[vstup - 1];

        Console.WriteLine("Nazov ulohy:");
        string nazovUlohy = Console.ReadLine();

        Console.WriteLine("Popis ulohy:");
        string popisUlohy = Console.ReadLine();

        vybranyProjekt.PridajUlohu(nazovUlohy, popisUlohy);
    }
    else if (volba == 3)
    {
        // TODO: oznacit ulohu ako dokoncenu
        Console.WriteLine("Vyber projekt pre novu ulohu:");
        for (int i = 0; i < projekty.Count; i++)
        {
            Console.WriteLine($"{i + 1} - Projekt: {projekty[i].Nazov}");
        }
        int vstup = Convert.ToInt32(Console.ReadLine());
        Projekt vybranyProjekt = projekty[vstup - 1];

        Console.WriteLine("Vyber ulohu ktoru chces oznacit ako dokoncenu:");
        for(int j = 0; j < vybranyProjekt.Ulohy.Count; j++)
        {
            Console.WriteLine($"{j + 1} - {vybranyProjekt.Ulohy[j].Nazov}");
        }
        int cisloUlohy = Convert.ToInt32(Console.ReadLine());
        Uloha vybranaUloha = vybranyProjekt.Ulohy[cisloUlohy - 1];
        vybranaUloha.Dokoncena = true;
    }
    else if (volba == 4)
    {
        // TODO: vypisat vsetko
        foreach(var proj in projekty)
        {
            proj.VypisInfo();
        }
    }
    else if (volba == 5)
    {
        // TODO: ulozit do suboru
    }
    else if (volba == 6)
    {
        // TODO: nacitat zo suboru
    }
    else if (volba == 7)
    {
        online = false;
    }
    else
    {
        Console.WriteLine("Neplatna volba.");
    }
    Console.WriteLine();
}
class Uloha
{
    public int Id { get; set; }
    public string Nazov { get; set; }
    public string Popis {  get; set; }
    public bool Dokoncena { get; set; }
    public Uloha(int id, string nazov, string popis)
    {
        Id = id;
        Nazov = nazov;
        Popis = popis;
        Dokoncena = false;
    }
    public void OznacAkoDokoncenu()
    {
        Dokoncena = true;
    }
    public void VypisInfo()
    {
        string stav = Dokoncena ? "[V]" : "[X]";
        Console.WriteLine($"[{Id}] {stav} {Nazov} - {Popis}");
    }
}

class Projekt
{
    public string Nazov { get; set; }
    public List<Uloha> Ulohy { get; set; }
    public Projekt(string nazov)
    {
        Nazov = nazov;
        Ulohy = new List<Uloha>();
    }
    public void PridajUlohu(string nazov, string popis)
    {
        int noveId = Ulohy.Count+1;
        Uloha u = new Uloha(noveId, nazov, popis);
        Ulohy.Add(u);
    }
    public Uloha NajdiUlohuPodlaId (int id)
    {
        foreach(var u in Ulohy)
        {
            if (u.Id == id)
                return u;
        }
        return null;
    }
    public void VypisInfo()
    {
        Console.WriteLine($"Projekt: {Nazov}, Pocet uloh: {Ulohy.Count}");
        foreach(var u in Ulohy)
        {
            u.VypisInfo();
        }
    }
}