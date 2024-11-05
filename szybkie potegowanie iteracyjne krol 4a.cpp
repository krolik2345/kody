#include <iostream>
using namespace std;

int szybkiePotegowanie(int a, int n) {
    int wynik = 1;  

    
    while (n > 0) {
       
        if (n % 2 == 1) {
            wynik = wynik * a;  
        }
        
      
        a = a * a;


        n = n / 2;
    }

    // Zwracamy wynik
    return wynik;
}

int main() {
    int a, n;

    cout << "Podaj podstawe a: ";
    cin >> a;
    cout << "Podaj wykładnik n: ";
    cin >> n;

   
    int wynik = szybkiePotegowanie(a, n);
    cout << "Wynik potegowania " << a << "^" << n << " to: " << wynik << endl;

    return 0;
}