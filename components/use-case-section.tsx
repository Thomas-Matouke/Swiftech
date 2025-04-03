import { CheckCircle } from "lucide-react"

interface UseCaseProps {
  industry: string
  challenge: string
  solution: string
  results: string[]
}

export default function UseCaseSection({ industry, challenge, solution, results }: UseCaseProps) {
  return (
    <div className="bg-white border border-gray-100 overflow-hidden animate-fade-in-up hover:shadow-lg transition-all duration-300">
      <div className="bg-swiftech-blue text-white p-6">
        <h3 className="text-2xl font-bold">{industry}</h3>
      </div>
      <div className="p-8 space-y-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Le défi</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Notre solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Résultats</h4>
          <ul className="space-y-2">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="bg-swiftech-blue rounded-full p-1 flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{result}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

