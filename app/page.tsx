import { Input } from "@/components/ui/input"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Dna, Globe, Layers, Shield, Trophy, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="PETUNIA Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold">PETUNIA</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#overview" className="text-sm font-medium hover:text-primary">
              Overview
            </Link>
            <Link href="#technology" className="text-sm font-medium hover:text-primary">
              Technology
            </Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#roadmap" className="text-sm font-medium hover:text-primary">
              Roadmap
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link href="#contact">Contact</Link>
            </Button>
            <Button asChild>
              <Link href="#register">Register Interest</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                PETUNIA: The <span className="text-primary">UNION</span> of PETS
              </h1>
              <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
                Care for, train, and compete with unique virtual pets in an immersive AR experience powered by
                blockchain technology.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-10">
            <div className="h-[800px] w-[800px] rounded-full bg-primary blur-3xl"></div>
          </div>
          <div className="mt-16 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ar-example-XXSGWKntdyiQnh1NlglJhcsOzJMLra.png"
              alt="Virtual Pet in AR"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </section>

        {/* Project Overview */}
        <section id="overview" className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Project Overview</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PETUNIA reimagines virtual pets for the blockchain era, combining entertainment with real digital
                ownership.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Unique NFT Pets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Own truly unique virtual pets as NFTs with guaranteed blockchain authenticity and exclusive traits.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>AR Interaction</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Experience your pets in the real world through augmented reality. Feed, train, and play with them
                    using AR gestures.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    True ownership guaranteed by blockchain technology. Trade pets and accessories in a secure,
                    decentralized marketplace.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Breeding & Genetics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Breed your pets to create new NFT offspring with unique attributes and traits recorded on the
                    blockchain.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Competitions & Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Compete with your trained pets in various challenges to earn cryptocurrency rewards and rare NFT
                    items.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Crypto Economy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    A native cryptocurrency powers all interactions—buy, breed, train, and compete in a seamless digital
                    economy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Blockchain, NFT, and Cryptocurrency Integration */}
        <section id="technology" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Technology Integration</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PETUNIA leverages cutting-edge blockchain technology to create a secure, transparent, and engaging
                virtual pet ecosystem.
              </p>
            </div>
            <div className="mt-16">
              <Tabs defaultValue="nft" className="mx-auto max-w-4xl">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="nft">NFT Pets</TabsTrigger>
                  <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
                  <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                </TabsList>
                <TabsContent value="nft" className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold">Unique NFT Pets</h3>
                      <p className="mt-4">
                        Each PETUNIA pet is a unique non-fungible token (NFT) on the blockchain, guaranteeing
                        exclusivity and true ownership. Your pets have verifiable rarity, unique attributes, and a
                        permanent record on the blockchain.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Verifiable uniqueness and rarity</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Permanent blockchain record</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Transferable ownership</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-27%20a%20la%28s%29%207.19.34%E2%80%AFp.%C2%A0m.-L4TRlnpZRzDUq9y53ogh9ugBfLI6nD.png"
                        alt="NFT Pet Example"
                        width={300}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="marketplace" className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold">Decentralized Marketplace</h3>
                      <p className="mt-4">
                        Trade pets, accessories, and rare items in our secure, decentralized marketplace. All
                        transactions are transparent and recorded on the blockchain, ensuring security and authenticity.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Peer-to-peer trading</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Transparent pricing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Secure transactions</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-27%20a%20la%28s%29%207.21.21%E2%80%AFp.%C2%A0m..png-Yyu1jS1MgtErz6zfhzzp15w2N7Ur3R.jpeg"
                        alt="Marketplace Interface"
                        width={300}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="crypto" className="mt-6 space-y-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2">
                      <h3 className="text-2xl font-bold">Native Cryptocurrency</h3>
                      <p className="mt-4">
                        PETUNIA's native cryptocurrency powers all in-game interactions. Use it to buy, train, and
                        compete with your pets, with options to convert to other major cryptocurrencies.
                      </p>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>In-game economy</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Reward system</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Cryptocurrency exchange</span>
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-1/2">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-27%20a%20la%28s%29%207.19.43%E2%80%AFp.%C2%A0m..png-n85thY9Cmz7yuatF9bMdyQuc0msm9a.jpeg"
                        alt="Cryptocurrency System"
                        width={300}
                        height={300}
                        className="rounded-xl shadow-lg mx-auto"
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* StarkNet + OnlyDust */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">StarkNet + OnlyDust</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Powered by StarkNet's Layer-2 solution and seeking funding through OnlyDust to build a revolutionary pet
                ecosystem.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle>StarkNet Integration</CardTitle>
                  </div>
                  <CardDescription>Layer-2 solution for efficient blockchain operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Low-Cost Transactions</h4>
                        <p className="text-sm text-muted-foreground">
                          StarkNet enables microtransactions at a fraction of the cost of traditional blockchain
                          operations.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Fast Processing</h4>
                        <p className="text-sm text-muted-foreground">
                          Enjoy near-instant transaction confirmations, essential for smooth gameplay and marketplace
                          activities.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Layers className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Scalability</h4>
                        <p className="text-sm text-muted-foreground">
                          StarkNet's architecture allows PETUNIA to scale to millions of users without performance
                          degradation.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-background/60 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-primary" />
                    <CardTitle>OnlyDust Funding</CardTitle>
                  </div>
                  <CardDescription>Community-driven development and funding</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <Globe className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Community Support</h4>
                        <p className="text-sm text-muted-foreground">
                          PETUNIA seeks funding through OnlyDust to build a community-driven virtual pet ecosystem.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Trophy className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Investor Engagement</h4>
                        <p className="text-sm text-muted-foreground">
                          Early supporters gain exclusive benefits and a stake in PETUNIA's growing ecosystem.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Dna className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Disruptive Innovation</h4>
                        <p className="text-sm text-muted-foreground">
                          Positioned as a revolutionary NFT pet platform that combines entertainment with blockchain
                          technology.
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PETUNIA combines cutting-edge technology with engaging gameplay to create a unique virtual pet
                experience.
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Unique NFT Pets</h3>
                <p className="text-muted-foreground">
                  Each pet is a unique NFT with verifiable traits and attributes, backed by secure smart contracts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Dna className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Genetic Breeding</h3>
                <p className="text-muted-foreground">
                  Cross pets to create new NFT offspring with distinct traits and strengths inherited from their
                  parents.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Decentralized Marketplace</h3>
                <p className="text-muted-foreground">
                  Trade pets, accessories, and rare items securely in our blockchain-powered marketplace.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">In-Game Cryptocurrency</h3>
                <p className="text-muted-foreground">
                  A native token powers all interactions—buy, breed, train, and compete in a seamless digital economy.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Competitions & Events</h3>
                <p className="text-muted-foreground">
                  Win cryptocurrency or rare NFTs by excelling in skill-based challenges and seasonal events.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-background/40 backdrop-blur">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <Layers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AR Interaction</h3>
                <p className="text-muted-foreground">
                  Experience your pets in the real world through augmented reality technology on your smartphone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation with React & AR */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Implementation</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PETUNIA leverages modern web technologies and augmented reality to create an immersive pet experience.
              </p>
            </div>
            <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-03-03%20a%20la%28s%29%207.46.56%E2%80%AFp.%C2%A0m.-tVoDW5iBRp7rWhkXsceY7axK9r8NN0.png"
                  alt="AR Implementation"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-xl mx-auto"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">React UI</h3>
                  <p className="text-muted-foreground">
                    A modern frontend framework for user-friendly interfaces and quick updates, ensuring a smooth
                    experience across all devices.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Augmented Reality</h3>
                  <p className="text-muted-foreground">
                    See your pets in the real world through your smartphone camera. Feed, train, and interact with them
                    through AR-based gestures and animations.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">3D Models</h3>
                  <p className="text-muted-foreground">
                    High-quality 3D models in .GLTF format ensure optimal visual quality and performance across all
                    devices.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Blockchain Integration</h3>
                  <p className="text-muted-foreground">
                    Seamless integration with StarkNet for efficient, low-cost blockchain transactions and secure NFT
                    management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section id="roadmap" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Development Roadmap</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our strategic plan to bring PETUNIA from concept to reality.
              </p>
            </div>
            <div className="mt-16 relative">
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
              <div className="space-y-16">
                <div className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                      <span className="text-sm font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-auto w-1/2 pl-8">
                    <div className="rounded-lg border bg-background p-6">
                      <h3 className="text-xl font-bold">Phase 1: Prototype & Smart Contracts</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Develop initial NFT pet smart contracts</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Implement basic breeding functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Create prototype marketplace on StarkNet</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Design initial pet models and animations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                      <span className="text-sm font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-auto w-1/2 pr-8 md:ml-0 md:mr-auto md:pl-0">
                    <div className="rounded-lg border bg-background p-6">
                      <h3 className="text-xl font-bold">Phase 2: Native Token & Advanced Features</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Launch native cryptocurrency token</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Implement microtransactions system</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Develop training modules and pet attributes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Create competition framework and rewards</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                      <span className="text-sm font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-auto w-1/2 pl-8">
                    <div className="rounded-lg border bg-background p-6">
                      <h3 className="text-xl font-bold">Phase 3: AR Implementation & Public Testing</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Develop AR interaction framework</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Implement pet animations and behaviors in AR</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Launch beta testing program</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Gather and implement community feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border bg-background">
                      <span className="text-sm font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-auto mr-auto w-1/2 pr-8 md:ml-0 md:mr-auto md:pl-0">
                    <div className="rounded-lg border bg-background p-6">
                      <h3 className="text-xl font-bold">Phase 4: Full Launch & Marketing</h3>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Official platform launch</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Marketing campaigns targeting gamers and NFT collectors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Partnership announcements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-primary" />
                          <span>Expansion of features and pet varieties</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials/Demos */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Early Previews</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                See what our early adopters and blockchain experts are saying about PETUNIA.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="User Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>Alex Johnson</CardTitle>
                      <CardDescription>Blockchain Developer</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "PETUNIA's integration with StarkNet is brilliant. The low transaction costs and speed make it
                    perfect for a game with microtransactions. This could be the breakthrough AR pet game the blockchain
                    space needs."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/placeholder.svg?height=50&width=50"
                      alt="User Avatar"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>Sarah Chen</CardTitle>
                      <CardDescription>NFT Collector</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="italic">
                    "I've been waiting for a project that combines NFTs with actual gameplay value. The breeding
                    mechanics and AR integration in PETUNIA are exactly what the space needs to bring in mainstream
                    adoption."
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 flex justify-center">
              <div className="rounded-xl overflow-hidden border shadow-xl max-w-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-27%20a%20la%28s%29%207.21.21%E2%80%AFp.%C2%A0m..png-XRJV4ZKpRcIyQybGTALdyWy8JmeJqM.jpeg"
                  alt="PETUNIA Demo"
                  width={700}
                  height={400}
                  className="w-full"
                />
                <div className="p-4 bg-background">
                  <h3 className="font-bold">Early Prototype Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    A sneak peek at our AR pet interaction system and blockchain integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Common questions about PETUNIA, NFTs, StarkNet, and blockchain technology.
              </p>
            </div>
            <div className="mt-16 mx-auto max-w-3xl">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold">What is an NFT pet?</h3>
                  <p className="mt-2 text-muted-foreground">
                    An NFT pet is a unique digital pet that exists on the blockchain. Each pet is a non-fungible token
                    (NFT) with verifiable ownership, rarity, and unique attributes that cannot be duplicated or forged.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold">How does StarkNet benefit PETUNIA?</h3>
                  <p className="mt-2 text-muted-foreground">
                    StarkNet is a Layer-2 solution that enables fast, low-cost transactions on the blockchain. This is
                    essential for PETUNIA's microtransactions, breeding, and marketplace activities, ensuring a smooth
                    user experience.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold">What is OnlyDust and how is it related to PETUNIA?</h3>
                  <p className="mt-2 text-muted-foreground">
                    OnlyDust is a platform that connects projects with funding. PETUNIA is seeking funding through
                    OnlyDust to develop its revolutionary NFT pet ecosystem, allowing early supporters to participate in
                    the project's growth.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold">How does the breeding system work?</h3>
                  <p className="mt-2 text-muted-foreground">
                    PETUNIA's breeding system allows two pets to create offspring with traits inherited from both
                    parents. The genetic information is recorded on the blockchain, ensuring transparency and uniqueness
                    for each new pet.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-bold">Is PETUNIA secure?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Yes, PETUNIA leverages blockchain technology to ensure security and transparency. All transactions,
                    pet ownership, and breeding records are stored on the blockchain, making them immutable and
                    verifiable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section id="register" className="py-20 bg-muted/50">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Join the PETUNIA Revolution</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Be among the first to experience the future of virtual pets. Register now to stay updated and get early
                access.
              </p>
            </div>
            <div className="mt-10 mx-auto max-w-md">
              <Card>
                <CardHeader>
                  <CardTitle>Register Interest</CardTitle>
                  <CardDescription>
                    Sign up to get notified about PETUNIA's launch and early access opportunities.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                      <label htmlFor="terms" className="text-sm text-muted-foreground">
                        I agree to the{" "}
                        <Link href="#" className="text-primary hover:underline">
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                    <Button type="submit" className="w-full">
                      Register Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="OnlyDust"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>OnlyDust</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Twitter"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Twitter</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Discord"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Discord</span>
              </Link>
              <Link href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                <Image
                  src="/placeholder.svg?height=24&width=24"
                  alt="Telegram"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span>Telegram</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section id="vision" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Future Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PETUNIA aims to revolutionize the intersection of gaming, collectibles, and blockchain technology.
              </p>
            </div>
            <div className="mt-16 flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-27%20a%20la%28s%29%207.19.43%E2%80%AFp.%C2%A0m..png-n85thY9Cmz7yuatF9bMdyQuc0msm9a.jpeg"
                  alt="Future Vision"
                  width={400}
                  height={400}
                  className="rounded-xl shadow-xl mx-auto"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ecosystem Expansion</h3>
                  <p className="text-muted-foreground">
                    PETUNIA will grow beyond pets to include accessories, environments, and mini-games, creating a
                    comprehensive virtual world.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cross-Platform Integration</h3>
                  <p className="text-muted-foreground">
                    Future updates will bring PETUNIA to VR platforms, expanding the immersive experience beyond AR.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Community Governance</h3>
                  <p className="text-muted-foreground">
                    PETUNIA will transition to a DAO structure, allowing pet owners to vote on new features and
                    ecosystem changes.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Real-World Partnerships</h3>
                  <p className="text-muted-foreground">
                    Collaborations with brands and artists will bring exclusive pet designs and accessories to the
                    PETUNIA ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="PETUNIA Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="text-xl font-bold">PETUNIA</span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                The revolutionary virtual pet platform powered by blockchain technology and augmented reality.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#overview" className="text-sm text-muted-foreground hover:text-primary">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="#technology" className="text-sm text-muted-foreground hover:text-primary">
                    Technology
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="text-sm text-muted-foreground hover:text-primary">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#roadmap" className="text-sm text-muted-foreground hover:text-primary">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#register" className="text-sm text-muted-foreground hover:text-primary">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Medium
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    GitHub
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                    Disclaimers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t pt-6">
            <p className="text-center text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PETUNIA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

