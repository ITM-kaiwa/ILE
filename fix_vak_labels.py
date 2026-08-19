import os

path = 'components/Navbar.tsx'
with open(path, 'r', encoding='utf-8') as f:
    nav = f.read()

# Replace V, A, K with Visual, Audio, Kine...
# Need to be precise
nav = nav.replace(">V</button>", ">Visual</button>")
nav = nav.replace(">A</button>", ">Audio</button>")
nav = nav.replace(">K</button>", ">Kine...</button>")

with open(path, 'w', encoding='utf-8') as f:
    f.write(nav)
print("Updated VAK labels in Navbar")
