#include <iostream>
#include <iostream>
#include <stdlib.h>
#include <fstream>
#include <string.h>
#include <string>
#include <vector>

using namespace std;

vector<string> AddCode(string nameInput, string nameOutput, string fullnameInput, string fullnameOutput)
{
    vector<string> ans;
    string dn(1, char(34));
    string input, output;
    input = "freopen(" + dn + nameInput + fullnameInput + dn + "," + dn + "r" + dn + ",stdin);";
    output = "freopen(" + dn + nameOutput + fullnameOutput + dn + "," + dn + "w" + dn + ",stdout);";
    ans.push_back(input);
    ans.push_back(output);

    return ans;
}

vector<string> InsertCode(string namefile, string nameInput, string nameOutput, string fullnameInput, string fullnameOutput)
{
    fstream file;
    file.open(namefile, ios::in);
    vector<string> code;
    int k = 0;
    bool check_main = false;
    while (!file.eof())
    {
        string linecode;
        getline(file, linecode);
        if (check_main == false)
        {
            check_main = (linecode.find("main()", 0) < 100) ? true : false;
        }
        else if (check_main && k == 2)
        {
            vector<string> encode = AddCode(nameInput, nameOutput, fullnameInput, fullnameOutput);
            for (int i = 0; i < encode.size(); ++i)
            {
                code.push_back(encode[i]);
            }
            ++k;
        }
        else
            ++k;

        code.push_back(linecode);
    }
    return code;
}

void WriteFile(string readFile, string writeFile, string nameInput, string nameOutput, string fullnameInput, string fullnameOutput)
{
    vector<string> code = InsertCode(readFile, nameInput, nameOutput, fullnameInput, fullnameOutput);
    fstream file;
    file.open(writeFile, ios::out);
    for (int i = 0; i < code.size(); ++i)
    {
        file << code[i] << "\n";
    }

    file.close();
}

bool CheckAns(string readFile, string writeFile, string nameInput, string nameOutput, string fullnameInput, string fullnameOutput)
{
    WriteFile(readFile + ".cpp", writeFile + ".cpp", nameInput, nameOutput, ".in", ".out");
    system(("g++ " + writeFile + ".cpp " + "-o" + writeFile).c_str());
    system(writeFile.c_str());
    string cmd = "fc " + nameOutput + ".out " + nameOutput + ".ans";
    if (system(cmd.c_str()))
        return false;
    return true;
}

int main()
{
    fstream file;
    file.open("res.txt", ios::out);
    string name = "check";
    string readFile = "test";
    string writeFile = "test1";
    for (int i = 1; i <= 3; ++i)
    {
        bool check = CheckAns(readFile, writeFile, name + to_string(i), name + to_string(i), ".in", ".out");
        file << name + to_string(i) << ": " << ((check == true) ? "AC" : "WA") << endl;
    }
    file.close();
    return 0;
}
